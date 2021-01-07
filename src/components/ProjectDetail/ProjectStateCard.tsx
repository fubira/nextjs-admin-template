import React, { useState } from 'react';
import styled from 'styled-components';
import dayjs from 'dayjs';

import { Card } from '@paljs/ui/Card';
import Row from '@paljs/ui/Row';
import Col from '@paljs/ui/Col';
import { Button } from '@paljs/ui/Button';
import { EvaIcon } from '@paljs/ui/Icon';

import Progress from 'components/Progress';
import CommitModal from './CommitModal';

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
    title: string;
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
  const [favorite, setFavorite] = useState(false);
  const [visible, setVisible] = useState(false);
  const onClickHandler = () => {
    console.log('onClick', favorite);
    setFavorite(!favorite);
  };
  const onShow = () => {
    setVisible(true);
  };
  const onHide = () => {
    setVisible(false);
    console.log('onHide', visible);
  };
  const onCommit = () => {
    setVisible(false);
    console.log('onHide', visible);
  };
  const onCancel = () => {
    setVisible(false);
    console.log('onHide', visible);
  };

  const FavButton = (prop: { favorite: boolean }) =>
    prop.favorite ? (
      <Button fullWidth appearance="filled" status="Warning" onClick={onClickHandler}>
        <ButtonTextStyle>
          <EvaIcon name="heart" /> お気に入り
        </ButtonTextStyle>
      </Button>
    ) : (
      <Button fullWidth appearance="outline" status="Basic" onClick={onClickHandler}>
        <ButtonTextStyle>
          <EvaIcon name="heart-outline" /> お気に入り
        </ButtonTextStyle>
      </Button>
    );

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
              <span className="value"> {dayjs(project.expiredAt).diff(dayjs(), 'day')} 日</span>
            </LineStyle>
          </Col>
        </Row>
        <Row className="row">
          <Col breakPoint={{ xs: 12 }}>
            <LineStyle>
              <Button fullWidth status="Primary" size="Giant" onClick={onShow}>
                <ButtonTextStyle>
                  プロジェクトを支援する
                  <EvaIcon name="chevron-right" />
                </ButtonTextStyle>
              </Button>
            </LineStyle>
          </Col>
          <Col breakPoint={{ xs: 12 }}>
            <LineStyle>
              <FavButton favorite={favorite}></FavButton>
            </LineStyle>
          </Col>
        </Row>
        <CommitModal visible={visible} project={project} onHide={onHide} onCommit={onCommit} onCancel={onCancel}>
          <p>dialog</p>
        </CommitModal>
      </ProjectStateCardStyle>
    </Card>
  );
};
export default ProjectStateCard;
