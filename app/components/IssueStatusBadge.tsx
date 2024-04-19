import { Status } from '@prisma/client'
import { Badge } from '@radix-ui/themes'
import React from 'react'

const statusMap : Record <Status, {label:string, color: 'red' | 'violet' | 'green'}> = {
    'OPEN': {label: 'Open', color:'red'},
    'CLOSE': {label: 'Closed', color:'violet'},
    'IN_PROGRESS': {label: 'In Progress', color:'green'}
}
const IssueStatusBadge = ({status}: {status: Status}) => {
  return (
    <Badge color={statusMap[status].color}>{statusMap[status].label}</Badge>
  )
}

export default IssueStatusBadge