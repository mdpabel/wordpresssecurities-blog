'use client';
import { useContext, useState } from 'react';
import Header from '@/components/all-post/Header';
import Pagination from '@/components/all-post/Pagination';
import ComponentWrapper from '@/components/common/ComponentWrapper';
import { formateDateAndTime } from '@/utils/formateDate';
import {
  useReactTable,
  createColumnHelper,
  getCoreRowModel,
  flexRender,
  SortingState,
  getSortedRowModel,
  getFilteredRowModel,
} from '@tanstack/react-table';
import Input from '@/components/common/Input';
import Link from 'next/link';
import { usePost } from '@/context/blogContext';

type Post = {
  id: string;
  title: string;
  author: string;
  categories: string;
  updatedAt: Date;
  View: string;
  edit: any;
};

const columnHelper = createColumnHelper<Post>();

const columns = [
  columnHelper.accessor('id', {
    cell: (info) => info.getValue(),
    header: () => <div className='flex items-center cursor-pointer'>ID</div>,
  }),
  columnHelper.accessor('title', {
    cell: (info) => info.getValue(),
    header: () => <div className='flex items-center cursor-pointer'>Title</div>,
  }),
  columnHelper.accessor('author', {
    cell: (info) =>
      (info.getValue() as any)?.firstName +
      ' ' +
      (info.getValue() as any)?.lastName,
    header: () => (
      <div className='flex items-center cursor-pointer'>Author</div>
    ),
  }),
  columnHelper.accessor('categories', {
    cell: (info) => (info.getValue() as any).join(', '),
    header: () => (
      <div className='flex items-center cursor-pointer'>Categories</div>
    ),
  }),
  columnHelper.accessor('updatedAt', {
    cell: (info) => formateDateAndTime(info.getValue()),
    header: () => (
      <div className='flex items-center cursor-pointer'>Last Modified</div>
    ),
  }),
  columnHelper.accessor('View', {
    cell: (info) => (info.getValue() as any)?.count,
    header: () => <div className='flex items-center cursor-pointer'>Views</div>,
  }),
  columnHelper.accessor('edit', {
    cell: (info) => (
      <Link
        className='underline'
        href={`/update-post?id=${info.row.original.id}`}
      >
        Edit
      </Link>
    ),
    header: () => <div className='flex items-center cursor-pointer'>Edit</div>,
  }),
];

const AllPosts = () => {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [globalFilter, setGlobalFilter] = useState('');
  const data = usePost();

  const table = useReactTable({
    columns: columns,
    data: data as any,
    state: {
      sorting,
      globalFilter,
    },

    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),

    onSortingChange: setSorting,
    onGlobalFilterChange: setGlobalFilter,
  });

  return (
    <ComponentWrapper className='pt-10'>
      <h1 className='text-2xl text-center mb-10'>Manage your posts</h1>
      <Input
        placeholder='Search...'
        value={globalFilter ?? ''}
        onChange={(e) => setGlobalFilter(e.target.value)}
      />
      <div className='relative space-y-5 overflow-x-auto sm:rounded-lg min-h-[80vh] pt-10'>
        <table className='w-full text-sm text-left text-gray-500 '>
          <thead className='text-xs text-gray-700 uppercase bg-gray-50'>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    onClick={header.column.getToggleSortingHandler()}
                    scope='col'
                    className='px-6 py-3 space-x-2'
                    key={header.id}
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext(),
                    )}
                    {{
                      asc: <div>🔼</div>,
                      desc: <div>🔽</div>,
                    }[header.column.getIsSorted() as string] ?? null}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr className='bg-white border-b' key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td className='px-6 py-4' key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <div className='h-2' />

        <div className='flex items-center gap-2'>
          <button
            className='border rounded p-1'
            onClick={() => table.setPageIndex(0)}
            disabled={!table.getCanPreviousPage()}
          >
            {'<<'}
          </button>
          <button
            className='border rounded p-1'
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            {'<'}
          </button>
          <button
            className='border rounded p-1'
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            {'>'}
          </button>
          <button
            className='border rounded p-1'
            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
            disabled={!table.getCanNextPage()}
          >
            {'>>'}
          </button>

          <span className='flex items-center gap-1'>
            | Go to page:
            <input
              type='number'
              defaultValue={table.getState().pagination.pageIndex + 1}
              onChange={(e) => {
                const page = e.target.value ? Number(e.target.value) - 1 : 0;
                table.setPageIndex(page);
              }}
              className='border p-1 rounded w-16'
            />
          </span>
        </div>
        <div className='flex space-x-4'>
          <div>{table.getPrePaginationRowModel().rows.length} Rows</div>
          <div>|</div>
          <span className='flex items-center gap-1'>
            <div>Page</div>
            <strong>
              {table.getState().pagination.pageIndex + 1} of{' '}
              {table.getPageCount()}
            </strong>
          </span>
          <div>|</div>
          <select
            value={table.getState().pagination.pageSize}
            onChange={(e) => {
              table.setPageSize(Number(e.target.value));
            }}
          >
            {[10, 20, 30, 40, 50].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                Show {pageSize}
              </option>
            ))}
          </select>
        </div>
      </div>
    </ComponentWrapper>
  );
};

export default AllPosts;
