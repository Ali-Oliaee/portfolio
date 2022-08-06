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

  const SkillItem = ({title, description}) => {
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
            <SkillItem title="OOP" description="c++, algoritms, data structures" />
            <SkillItem title="HTML" description="web basics" />
            <SkillItem title="CSS" description="grid, flexbox, mediaQuery, sass" />
            <SkillItem title="GIT" description="basic usage, github, gitlab" />
            <SkillItem title="JavaScript" description="ES6, JSON, Objects, Async/await, Promises, DOM, BOM, APIs, Hoisting, IIFE, Events, browser storages, " />
            <SkillItem title="React" description="React-query, React-Router, Antdesign and MaterialUI, i18n, npm and yarn, hooks, formik, axios, eslint, ssg and ssr (nextjs)" />
            <SkillItem title="Node" description="Restful API, mysql, mongoDB, express" />
            <SkillItem title="Linux" description="basic commands, terminal usage" />
            <SkillItem title="other" description="Scrum, trello, slack, googling, office" />
          </Timeline>
        </SmoothList>
      </div>
    </div>
  );
};

export default ResumePage;
