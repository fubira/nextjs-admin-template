import React from 'react';
import styled from 'styled-components';
import Progress from 'components/Progress';
import dayjs from 'dayjs';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

import { Card } from '@paljs/ui/Card';
import { EvaIcon } from '@paljs/ui/Icon';
import Container from '@paljs/ui/Container';
import Row from '@paljs/ui/Row';
import Col from '@paljs/ui/Col';
import { Button } from '@paljs/ui/Button';

const DetailStyle = styled.div`
  a {
    text-decoration: none;
  }
`;

const DetailCarouselStyle = styled.div`
  display: inline-block;
  max-width: 640px;
  max-height: 400px;
  .carousel .slide {
    padding: 0;
  }
  .carousel .thumbs-wrapper {
    margin: 5px;
  }
`;
/*
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
*/
const DetailHeaderStyle = styled.div`
  margin 1rem auto;
  text-align: center;
`;

const DetailCompanyStyle = styled.div`
  display: inline-flex;
  align-items: center;
  color: #888;
  margin 0 1rem;
`;

const DetailInformationStyle = styled.div`
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

const DetailStateStyle = styled.div``;

interface ProjectDetailProps {
  project?: any;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project }) => {
  const Details = project.details.map((detail: any, index: number) => {
    console.log(detail);
    return (
      <Card key={index}>
        <div> {detail.image || <img src={detail.image} />} </div>
        <span dangerouslySetInnerHTML={{ __html: detail.html }}></span>
      </Card>
    );
  });
  console.log(Details);

  return (
    <DetailStyle>
      <Container>
        <Row>
          <DetailHeaderStyle>
            <h1>{project.title}</h1>
            <DetailCompanyStyle>
              <EvaIcon name="person"></EvaIcon>
              {project.company.name}
            </DetailCompanyStyle>
          </DetailHeaderStyle>
        </Row>

        <Row>
          <Col breakPoint={{ xs: 12, is: 12, sm: 12, md: 8 }}>
            <DetailInformationStyle>
              <DetailCarouselStyle>
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
              </DetailCarouselStyle>
              <p>{project.description}</p>
            </DetailInformationStyle>
          </Col>
          <Col breakPoint={{ xs: 12, md: 4 }}>
            <DetailStateStyle>
              <Row>
                <Col>
                  <Progress value={project.status.progress} />
                </Col>
                <Col breakPoint={{ xs: 6, md: 12 }}>
                  <span className="icon">
                    <EvaIcon name="clock-outline" />
                  </span>
                  <span>現在の支援総額</span>
                </Col>
                <Col breakPoint={{ xs: 6, md: 12 }}>
                  <span className="money"> {Intl.NumberFormat().format(project.status.totalPrice || 0)} 円</span>
                </Col>
              </Row>
              <Row>
                <Col breakPoint={{ xs: 6, md: 12 }}>
                  <span className="icon">
                    <EvaIcon name="clock-outline" />
                  </span>
                  <span>支援者数</span>
                </Col>
                <Col breakPoint={{ xs: 6, md: 12 }}>
                  <span className="money"> {Intl.NumberFormat().format(project.status.totalPrice || 0)} 円</span>
                </Col>
              </Row>
              <Row>
                <Col breakPoint={{ xs: 6, md: 12 }}>
                  <span className="icon">
                    <EvaIcon name="clock-outline" />
                  </span>
                  <span>募集終了まで残り</span>
                </Col>
                <Col breakPoint={{ xs: 6, md: 12 }}>
                  <span className="money"> {dayjs(project.expiredAt).fromNow(true)} </span>
                </Col>
              </Row>
              <Row>
                <Col breakPoint={{ xs: 6, md: 12 }}>
                  <Button>プロジェクトを支援する</Button>
                </Col>
                <Col breakPoint={{ xs: 6, md: 12 }}>
                  <Button>お気に入り</Button>
                </Col>
              </Row>
            </DetailStateStyle>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
          <Col breakPoint={{ xs: 12, md: 8 }}> {Details} </Col>
          <Col breakPoint={{ xs: 12, md: 4 }}> {project.company.name} </Col>
        </Row>
      </Container>
    </DetailStyle>
  );
};

export default ProjectDetail;
