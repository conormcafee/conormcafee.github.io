import * as ReactTabs from '@radix-ui/react-tabs'
import { BIO_LINKS, BIO_PERSONAL, BIO_WORK } from './constants'
import { BioTabs } from './types'
import { TabsContent } from './TabsContent'
import React from 'react'

const tabs: BioTabs[] = [BIO_WORK, BIO_PERSONAL, BIO_LINKS]

export const Tabs = () => {
  const defaultTab = tabs.find((tab) => tab.id)?.id || null
  const [value, setValue] = React.useState<string | null>(defaultTab)

  if (!value) return null

  const getListStyles = (triggerValue: string): string => {
    const activeTrigger = 'bg-slate-700'
    const defaultTrigger = 'bg-transparent'
    const defaultTriggerStyles = 'px-4 py-2 border-r border-r-slate-700'
    return triggerValue === value
      ? `${defaultTriggerStyles} ${activeTrigger}`
      : `${defaultTriggerStyles} ${defaultTrigger}`
  }

  return (
    <ReactTabs.Root
      defaultValue={value}
      orientation='horizontal'
      className='bg-slate-800 border border-slate-700 rounded-sm'
    >
      <ReactTabs.List
        aria-label='bio tabs'
        className='border-b border-slate-700 text-sm'
      >
        {tabs.map(({ title, id }) => {
          return (
            <ReactTabs.Trigger
              key={id}
              value={id}
              className={getListStyles(id)}
              onClick={() => setValue(id)}
            >
              {title}
            </ReactTabs.Trigger>
          )
        })}
      </ReactTabs.List>
      <TabsContent />
    </ReactTabs.Root>
  )
}
