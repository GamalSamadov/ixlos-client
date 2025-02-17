'use client'

import Highlight from '@tiptap/extension-highlight'
import TextAlign from '@tiptap/extension-text-align'
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import {
  Heading1,
  Heading2,
  Heading3,
  Bold,
  Italic,
  Strikethrough,
  AlignLeft,
  AlignCenter,
  AlignRight,
  List,
  ListOrdered,
  Highlighter,
} from 'lucide-react'

import styles from './TextEditor.module.scss'
import Button from '../buttons/Button'

const TextEditor = ({
  content,
  onChange,
}: {
  content: string
  onChange: (content: string) => void
}) => {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: {
          levels: [1, 2, 3],
        },
        bulletList: {
          HTMLAttributes: {
            class: 'list-disc ml-3',
          },
        },
        orderedList: {
          HTMLAttributes: {
            class: 'list-decimal ml-3',
          },
        },
      }),
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
      Highlight,
    ],
    content,
    immediatelyRender: false,
    editorProps: {
      attributes: {
        class: styles.editor,
      },
    },
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML())
    },
  })

  if (!editor) return null

  const Options = [
    {
      icon: <Heading1 size={25} />,
      onClick: () => editor.chain().focus().toggleHeading({ level: 1 }).run(),
      preesed: editor.isActive('heading', { level: 1 }),
    },
    {
      icon: <Heading2 size={25} />,
      onClick: () => editor.chain().focus().toggleHeading({ level: 2 }).run(),
      preesed: editor.isActive('heading', { level: 2 }),
    },
    {
      icon: <Heading3 size={25} />,
      onClick: () => editor.chain().focus().toggleHeading({ level: 3 }).run(),
      preesed: editor.isActive('heading', { level: 3 }),
    },
    {
      icon: <Bold size={25} />,
      onClick: () => editor.chain().focus().toggleBold().run(),
      preesed: editor.isActive('bold'),
    },
    {
      icon: <Italic size={25} />,
      onClick: () => editor.chain().focus().toggleItalic().run(),
      preesed: editor.isActive('italic'),
    },
    {
      icon: <Strikethrough size={25} />,
      onClick: () => editor.chain().focus().toggleStrike().run(),
      preesed: editor.isActive('strike'),
    },
    {
      icon: <AlignLeft size={25} />,
      onClick: () => editor.chain().focus().setTextAlign('left').run(),
      preesed: editor.isActive({ textAlign: 'left' }),
    },
    {
      icon: <AlignCenter size={25} />,
      onClick: () => editor.chain().focus().setTextAlign('center').run(),
      preesed: editor.isActive({ textAlign: 'center' }),
    },
    {
      icon: <AlignRight size={25} />,
      onClick: () => editor.chain().focus().setTextAlign('right').run(),
      preesed: editor.isActive({ textAlign: 'right' }),
    },
    {
      icon: <List size={25} />,
      onClick: () => editor.chain().focus().toggleBulletList().run(),
      preesed: editor.isActive('bulletList'),
    },
    {
      icon: <ListOrdered size={25} />,
      onClick: () => editor.chain().focus().toggleOrderedList().run(),
      preesed: editor.isActive('orderedList'),
    },
    {
      icon: <Highlighter size={25} />,
      onClick: () => editor.chain().focus().toggleHighlight().run(),
      preesed: editor.isActive('highlight'),
    },
  ]

  return (
    <>
      <div className={styles['editor-options']}>
        {Options.map((option, i) => (
          <Button
            variant="link"
            key={i}
            onClick={option.onClick}
            isActive={option.preesed}
          >
            {option.icon}
          </Button>
        ))}
      </div>
      <EditorContent editor={editor} />
    </>
  )
}

export default TextEditor
