const imageHandler = async () => {
  const editor = quillRef.current?.getEditor();

  if (!editor) {
    console.log('Editor instance not found');
    return;
  }

  const input = document.createElement('input');
  input.setAttribute('type', 'file');
  input.setAttribute('accept', 'image/*');
  input.click();

  input.onchange = async () => {
    const file = input.files[0];

    if (!file) {
      console.log('No file selected');
      return;
    }

    if (!/^image\//.test(file.type)) {
      console.log('You can only upload images.');
      return;
    }

    const formData = new FormData();
    formData.append('image', file);

    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        const imageUrl = data.url;

        const range = editor.getSelection(true);
        editor.insertEmbed(range.index, 'image', imageUrl);
        editor.setSelection(range.index + 1);
      } else {
        console.error('Image upload failed');
      }
    } catch (error) {
      console.error('Image upload failed', error);
    }
  };
};
