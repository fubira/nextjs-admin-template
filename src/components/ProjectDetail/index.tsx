import React from 'react';
import styled from 'styled-components';
import Progress from 'components/Progress';
import dayjs from 'dayjs';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

import { Card } from '@paljs/ui/Card';
import { EvaIcon } from '@paljs/ui/Icon';

const DetailStyle = styled.div`
  a {
    text-decoration: none;
  }
`;

const DetailImageStyle = styled.div`
  display: inline-block;
  max-width: 600px;
  max-height: 300px;
  .carousel .slide {
    padding: 0;
  }
`;

const CardDescriptionStyle = styled.div`
  margin: 1rem 1rem;
  height: 4.2rem;
  font-size: 16px;
  line-height: 20px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

const DetailHeaderStyle = styled.div`
  margin 1rem 1rem;
  text-align: center;
`;

const DetailCompanyStyle = styled.div`
  display: inline-flex;
  align-items: center;
  color: #888;
  margin 0 1rem;
`;

const DetailInformationStyle = styled.div`
  margin: 1rem 1rem;

  .icon {
    margin-right: 0.2rem;
  }
  .time {
    display: flex;
    position: absolute;
    left: 1.8rem;
  }

  .money {
    display: flex;
    position: absolute;
    right: 1.8rem;
  }
`;

interface ProjectDetailProps {
  project?: any;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project }) => {
  return (
    <DetailStyle>
      <DetailHeaderStyle>
        <h1>{project.title}</h1>
        <DetailCompanyStyle>
          <EvaIcon name="person"></EvaIcon>
          {project.company}
        </DetailCompanyStyle>
      </DetailHeaderStyle>

      <DetailInformationStyle>
        <DetailImageStyle>
          <Carousel autoPlay infiniteLoop interval={10000}>
            <div>
              <img src={project.image} />
            </div>
            <div>
              <img src={project.image} />
            </div>
            <div>
              <img src={project.image} />
            </div>
          </Carousel>
        </DetailImageStyle>
        <DetailImageStyle>
          <p>現在の支援総額</p>
        </DetailImageStyle>
      </DetailInformationStyle>

      <Card>
        <CardDescriptionStyle> {project.description} </CardDescriptionStyle>
        <span className="time">
          <span className="icon">
            <EvaIcon name="clock-outline" />
          </span>
          {dayjs(project.expiredAt).fromNow()}
        </span>
        <span className="money"> {Intl.NumberFormat().format(project.status.prices || 0)} 円</span>
        <Progress value={project.status.progress} />
      </Card>
    </DetailStyle>
  );
};

export default ProjectDetail;
