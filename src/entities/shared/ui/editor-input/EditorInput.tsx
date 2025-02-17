'use client'

import { type MDXEditorMethods } from '@mdxeditor/editor'
import dynamic from 'next/dynamic'
import { useRef } from 'react'

const Editor = dynamic(() => import('@/shared/ui/editor/Editor'), {
  ssr: false,
})

interface Props {
  value: string
  onChange: (value: string) => void
}

const EditorInput = ({ value, onChange }: Props) => {
  const editorRef = useRef<MDXEditorMethods | null>(null)
  return <Editor editorRef={editorRef} value={value} fieldChange={onChange} />
}

export default EditorInput
