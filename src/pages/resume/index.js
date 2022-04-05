import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import { useTranslation } from "react-i18next";
import "./style.scss";

const ResumePage = () => {
  const { t } = useTranslation();
  return (
    <div className="resume-page">
      <div>
        <div className="experience">
          <h2 className="title">{t("experience")}</h2>
          <p>{t("experience-description")}</p>
        </div>
        <div className="education">
          <h2 className="title">{t("education")}</h2>
          <p>{t("education-description")}</p>
        </div>
        <div className="personality">
          <h2 className="title">{t("personality")}</h2>
          <ul>
            <li>{t("trustworthy")}</li>
            <li>{t("teamwork")}</li>
            <li>{t("learner")}</li>
            <li>{t("listener")}</li>
          </ul>
        </div>
      </div>
      <div className="skills">
        <h2 className="title">{t("skills")}</h2>
        <Timeline position="alternate" style={{ direction: "ltr" }}>
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
              API, es6
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
          <TimelineItem>
            <TimelineOppositeContent color="text.secondary">
              basic commands, terminal usage
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="primary" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>Linux</TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent color="text.secondary">
              Restful API, mysql, express
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="primary" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>Nodejs</TimelineContent>
          </TimelineItem>
        </Timeline>
      </div>
    </div>
  );
};

export default ResumePage;
