import {
  TimelineConnector, TimelineContent, TimelineDot,
  TimelineItem, TimelineOppositeContent, TimelineSeparator,
} from '@mui/lab'

function SkillItem({ title, description }) {
  return (
    <TimelineItem>
      <TimelineOppositeContent color="text.secondary">
        {description}
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot color="primary" />
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>{title}</TimelineContent>
    </TimelineItem>
  )
}

export default SkillItem
