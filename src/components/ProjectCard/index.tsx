import React from 'react';
import styled from 'styled-components';
import Progress from 'components/Progress';

import { Card } from '@paljs/ui/Card';
import { EvaIcon } from '@paljs/ui/Icon';

const ItemCardsStyle = styled.span`
  .card {
    .image {
      position: relative;
      height: 200px;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        z-index: 0;
      }
    }

    .image::before {
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

    .description {
      margin: 1rem 1rem;
      height: 50px;
      font-size: 16px;
      line-height: 20px;
    }
    .information {
      margin: 1rem 1rem;

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
    }
  }
`;

interface ProjectCardProps {
  item?: any;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ item }) => {
  return (
    <ItemCardsStyle>
      <Card className="card">
        <div className="image">
          <img src={item.image} alt={item.description} />
        </div>
        <div className="description"> {item.description} </div>
        <div className="information">
          <span className="time">
            <EvaIcon name="clock-outline" /> 1時間
          </span>
          <span className="money"> {Intl.NumberFormat().format(item.status.prices)} 円</span>
        </div>
        <div className="progress">
          <Progress value={item.status.progress} />
        </div>
      </Card>
    </ItemCardsStyle>
  );
};

export default ProjectCard;
