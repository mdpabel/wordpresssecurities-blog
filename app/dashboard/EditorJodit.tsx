'use client';
import React, { useState, useRef, useMemo } from 'react';
import JoditEditor from 'jodit-react';
import Button from '@/components/Button';

const EditorJodit = () => {
  const editor = useRef(null);
  const [content, setContent] = useState('');

  const handleImageUpload = async (
    file: File,
    callback: (imageUrl: string) => void
  ) => {
    // Create a Cloudinary upload URL
    const cloudinaryUploadUrl =
      'https://api.cloudinary.com/v1_1/divg4kqqk/image/upload';

    // Prepare the form data
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'mdp-upload'); // Replace with your Cloudinary upload preset

    try {
      // Make the API request to upload the image to Cloudinary
      const response = await fetch(cloudinaryUploadUrl, {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        const imageUrl = data.secure_url; // Retrieve the uploaded image URL from the response

        // Call the callback function with the uploaded image URL
        callback(imageUrl);
      } else {
        throw new Error('Image upload failed');
      }
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  const config = useMemo(
    () => ({
      readonly: false,
      placeholder: 'Start typings...',
      spellcheck: true,
      height: '450px',
      enableDragAndDropFileToEditor: true,
      uploader: {
        insertImageAsBase64URI: false, // Disable base64 image insertion
        // Set the custom uploader function for image upload
        // The `handleImageUpload` function will be called when an image is selected for upload
        files: handleImageUpload,
        // Additional uploader configuration options...
      },
    }),
    []
  );

  const handleSavePost = () => {};

  return (
    <div className='space-y-8'>
      <JoditEditor
        className='prose'
        ref={editor}
        value={content}
        config={config}
        onBlur={(newContent) => setContent(newContent)}
      />

      <Button className='justify-end' onClick={handleSavePost}>
        Save post
      </Button>
    </div>
  );
};

export default EditorJodit;
