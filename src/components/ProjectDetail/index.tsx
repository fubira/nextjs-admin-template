import React from 'react';
import styled from 'styled-components';
import Progress from 'components/Progress';
import dayjs from 'dayjs';

import { Card } from '@paljs/ui/Card';
import { EvaIcon } from '@paljs/ui/Icon';

const CardStyle = styled.div`
  a {
    text-decoration: none;
  }
`;

const CardImageStyle = styled.div<{ isNew?: boolean }>`
  position: relative;
  height: 200px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 0;
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

const CardInformationStyle = styled.div`
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
    <CardStyle>
      <Card>
        <CardImageStyle isNew={project.new}>
          <img src={project.image} alt={project.description} />
        </CardImageStyle>
        <CardDescriptionStyle> {project.description} </CardDescriptionStyle>
        <CardInformationStyle>
          <span className="time">
            <span className="icon">
              <EvaIcon name="clock-outline" />
            </span>
            {dayjs(project.expiredAt).fromNow()}
          </span>
          <span className="money"> {Intl.NumberFormat().format(project.status.prices || 0)} 円</span>
        </CardInformationStyle>
        <Progress value={project.status.progress} />
      </Card>
    </CardStyle>
  );
};

export default ProjectDetail;
