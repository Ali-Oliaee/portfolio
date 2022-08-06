import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import Button from "@mui/material/Button";
import cv from "../../cv.pdf";
import { useTranslation } from "react-i18next";
import SmoothList from "react-smooth-list";
import "./style.scss";

const ResumePage = () => {
  const { t } = useTranslation();
  const downloadCv = () => {
    const anchor = document.createElement("a");
    anchor.setAttribute("href", cv);
    anchor.setAttribute("download", "");
    anchor.click();
  };
  return (
      <div className="resume-page">
        <div>
          <SmoothList>
            <div className="experience">
              <h1 className="title">{t("experience")}</h1>
              <p>{t("experience-description")}</p>
            </div>
          </SmoothList>
          <SmoothList delay={200}>
            <div className="education">
              <h2 className="title">{t("education")}</h2>
              <p>{t("education-description")}</p>
            </div>
          </SmoothList>
          <SmoothList delay={350}>
            <div className="personality">
              <h2 className="title">{t("personality")}</h2>
              <ul>
                <li>{t("trustworthy")}</li>
                <li>{t("teamwork")}</li>
                <li>{t("learner")}</li>
                <li>{t("listener")}</li>
              </ul>
              <Button onClick={downloadCv} className="download-cv-button">
                {t("Download-cv")}
              </Button>
            </div>
          </SmoothList>
        </div>
        <div className="skills">
          <SmoothList>
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
                  React-query, React-Router, Antdesign and MaterialUI, i18n, npm
                  and yarn, hooks, formik, axios, eslint, ssg and ssr (nextjs)
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
                  Restful API, mysql, mongoDB, express
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot color="primary" />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>Nodejs</TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineOppositeContent color="text.secondary">
                  Scrum, trello, slack, googling, office
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot color="primary" />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>Other</TimelineContent>
              </TimelineItem>
            </Timeline>
          </SmoothList>
        </div>
      </div>
  );
};

export default ResumePage;
