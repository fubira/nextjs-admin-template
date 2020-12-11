import React from 'react';
import styled from 'styled-components';
import Progress from 'components/Progress';
import dayjs from 'dayjs';

import { Card } from '@paljs/ui/Card';
import { EvaIcon } from '@paljs/ui/Icon';

const CardImageStyle = styled.div`
  position: relative;
  height: 200px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 0;
  }

  ::before {
    background: rgba(255, 144, 32, 0.9);
    bottom: 0;
    color: #fff;
    content: 'New!';
    font-size: 15px;
    font-weight: 700;
    height: 23px;
    letter-spacing: 1px;
    line-height: 22px;
    position: absolute;
    text-align: center;
    width: 100%;
    z-index: 600;
  }
`;

const CardDescriptionStyle = styled.div`
  margin: 1rem 1rem;
  height: 4rem;
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

interface ProjectCardProps {
  item?: any;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ item }) => {
  return (
    <Card className="card">
      <CardImageStyle>
        <img src={item.image} alt={item.description} />
      </CardImageStyle>
      <CardDescriptionStyle> {item.description} </CardDescriptionStyle>
      <CardInformationStyle>
        <span className="time">
          <span className="icon">
            <EvaIcon name="clock-outline" />
          </span>
          {dayjs(item.expiredAt).fromNow()}
        </span>
        <span className="money"> {Intl.NumberFormat().format(item.status.prices)} 円</span>
      </CardInformationStyle>
      <Progress value={item.status.progress} />
    </Card>
  );
};

export default ProjectCard;
