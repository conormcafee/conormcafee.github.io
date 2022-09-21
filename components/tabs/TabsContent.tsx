import * as ReactTabs from '@radix-ui/react-tabs';
import { Fragment } from "react"
import { BIO_LINKS, BIO_PERSONAL, BIO_WORK } from './constants';

const className = 'p-4'

const WorkContent = () => {
  return (
    <ReactTabs.Content value={BIO_WORK.id} className={className}>
      <p>Work Content Here</p>
    </ReactTabs.Content>
  )
}

const PersonalContent = () => {
  return (
    <ReactTabs.Content value={BIO_PERSONAL.id} className={className}>
      <p>Personal Content Here</p>
    </ReactTabs.Content>
  )
}

const LinksContent = () => {
  return (
    <ReactTabs.Content value={BIO_LINKS.id} className={className}>
      <p>Links Content Here</p>
    </ReactTabs.Content>
  )
}

export const TabsContent = () => {
  return (
    <Fragment>
      <WorkContent />
      <PersonalContent />
      <LinksContent />
    </Fragment>
  )
}