import React from 'react';
import styled from 'styled-components';
import dayjs from 'dayjs';

import { Card } from '@paljs/ui/Card';
import Row from '@paljs/ui/Row';
import Col from '@paljs/ui/Col';
import { Button } from '@paljs/ui/Button';
import { EvaIcon } from '@paljs/ui/Icon';

import Progress from 'components/Progress';

const ProjectStateCardStyle = styled.div`
  margin: 0.8rem;

  .row {
    margin: 0.8rem 0;
  }
`;

const LineStyle = styled.div`
  margin: 0.5rem 0;
  .title {
    font-size: 16px;
    font-weight: 700;
    margin-left: 0.5rem;
  }

  .value {
    display: block;
    white-space: nowrap;
    width: 100%;
    text-align: right;
    font-size: 26px;
    font-weight: 700;
    line-height: 1;
  }

  button {
    margin: 0.2rem 0;
  }
`;

const ButtonTextStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

interface CompanyCardProps {
  className?: string;
  project: {
    images: [];
    description: string;
    status: {
      supporter: number;
      favorite: number;
      progress: number;
      totalPrice: number;
    };
    expiredAt: number;
  };
}

const ProjectStateCard: React.FC<CompanyCardProps> = ({ className, project }) => {
  return (
    <Card className={className}>
      <ProjectStateCardStyle>
        <Row className="row">
          <Col breakPoint={{ xs: 12 }}>
            <LineStyle>
              <span className="icon">
                <EvaIcon name="star-outline" />
              </span>
              <span className="title">現在の支援総額</span>
            </LineStyle>
          </Col>
          <Col breakPoint={{ xs: 12 }}>
            <LineStyle>
              <div className="value"> {Intl.NumberFormat().format(project.status.totalPrice || 0)} 円</div>
            </LineStyle>
          </Col>
          <Col breakPoint={{ xs: 12 }}>
            <LineStyle>
              <Progress value={project.status.progress} />
            </LineStyle>
          </Col>
        </Row>
        <Row className="row">
          <Col breakPoint={{ xs: 12 }}>
            <LineStyle>
              <span className="icon">
                <EvaIcon name="people-outline" />
              </span>
              <span className="title">支援者数</span>
            </LineStyle>
          </Col>
          <Col breakPoint={{ xs: 12 }}>
            <LineStyle>
              <span className="value"> {Intl.NumberFormat().format(project.status.supporter || 0)} 人</span>
            </LineStyle>
          </Col>
        </Row>
        <Row className="row">
          <Col breakPoint={{ xs: 12 }}>
            <LineStyle>
              <span className="icon">
                <EvaIcon name="clock-outline" />
              </span>
              <span className="title">募集終了まで残り</span>
            </LineStyle>
          </Col>
          <Col breakPoint={{ xs: 12 }}>
            <LineStyle>
              <span className="value"> {dayjs(project.expiredAt).fromNow(true)} </span>
            </LineStyle>
          </Col>
        </Row>
        <Row className="row">
          <Col breakPoint={{ xs: 12 }}>
            <LineStyle>
              <Button fullWidth status="Primary" size="Giant">
                <ButtonTextStyle>
                  プロジェクトを支援する
                  <EvaIcon name="chevron-right" />
                </ButtonTextStyle>
              </Button>
            </LineStyle>
          </Col>
          <Col breakPoint={{ xs: 12 }}>
            <LineStyle>
              <Button fullWidth appearance="outline" status="Warning">
                <ButtonTextStyle>
                  <EvaIcon name="heart-outline" /> お気に入り
                </ButtonTextStyle>
              </Button>
            </LineStyle>
          </Col>
        </Row>
      </ProjectStateCardStyle>
    </Card>
  );
};
export default ProjectStateCard;
