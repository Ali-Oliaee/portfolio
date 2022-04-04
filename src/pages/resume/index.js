import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import "./style.scss";

const ResumePage = () => {
  return (
    <div className="resume-page">
      <div className="skills">
        <h2 className="title">Skills</h2>
        <Timeline position="alternate">
          <TimelineItem>
            <TimelineOppositeContent color="text.secondary">
              c++, algoritms, data structures
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="primary" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>OOP</TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent color="text.secondary">
              web basics...
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="primary" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>HTML</TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent color="text.secondary">
              grid, flexbox, mediaQuery, sass
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="primary" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>CSS</TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent color="text.secondary">
              basic usage, github, gitlab
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="primary" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>Git</TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent color="text.secondary">
              Api,es6
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="primary" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>JavaScript</TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent color="text.secondary">
              React-query, React-Router, Antdesign and MaterialUI, i18n, npm and
              yarn, hooks, formik, axios, eslint, ssg and ssr (nextjs)
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="primary" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>React</TimelineContent>
          </TimelineItem>
        </Timeline>
      </div>
      <div>
        <div className="experience">
          <h2 className="title">Experience</h2>
          <p>
            From nov 22, 2021 to march 20, 2022, I worked at Arash Web Company
            as a frontend intern, During this time I have participated in
            several projects and also learned the main topics of the clean code
            book and met good friends and colleagues :)
          </p>
        </div>
        <div className="education">
          <h2 className="title">Education</h2>
          <p>
            I am currently an undergraduate computer engineering student and
            have been studying since 2019.
          </p>
        </div>
        <div className="personality">
          <h2 className="title">Personality</h2>
          <ul>
            <li>Trustworthy</li>
            <li>Teamwork</li>
            <li>Learner</li>
            <li>Listener</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ResumePage;
