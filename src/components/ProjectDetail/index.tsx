import React from 'react';
import styled from 'styled-components';

import { Card } from '@paljs/ui/Card';
import { EvaIcon } from '@paljs/ui/Icon';
import Container from '@paljs/ui/Container';
import Row from '@paljs/ui/Row';
import Col from '@paljs/ui/Col';
import CompanyCard from './CompanyCard';
import ProjectStateCard from './ProjectStateCard';
import ProjectCarousel from './ProjectCarousel';

const DetailStyle = styled.div`
  a {
    text-decoration: none;
  }
`;

const DetailCarouselStyle = styled.div`
  display: inline-block;
  width: 100%;
  .carousel .slide {
    padding: 0;
  }
  .carousel .thumbs-wrapper {
    margin: 0;
  }
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

const DetailHeaderStyle = styled.div`
  margin 1rem auto;
  text-align: center;
`;

const DetailCompanyStyle = styled.div`
  display: inline-flex;
  align-items: center;
  color: #888;
  margin: 0 1rem 1rem;
`;
const DetailTextStyle = styled.div`
  margin: 1rem 1rem 2rem;

  font-size: 16px;
  font-weight: 500;
`;

const CardDetailDocumentStyle = styled.div`
  margin: 1.5rem;
  img {
    width: 100%;
    margin-bottom: 0.5rem;
  }
`;

interface ProjectDetailProps {
  project?: any;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project }) => {
  const CardDetailDocuments = project.details.map((detail: any, index: number) => {
    return (
      <Card key={index}>
        <CardDetailDocumentStyle>
          <div> {detail.image ? <img src={detail.image} /> : null} </div>
          <span dangerouslySetInnerHTML={{ __html: detail.html }}></span>
        </CardDetailDocumentStyle>
      </Card>
    );
  });
  /*
                <Carousel autoPlay showStatus={false} swipeable={false} interval={10000}>
                  {project.images.map((src: string, index: number) => {
                    return <img key={index} src={src} />;
                  })}
                </Carousel>
  */
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
      </Container>

      <Container>
        <Row>
          <Col breakPoint={{ xs: 12, is: 12, sm: 12, md: 7, lg: 8 }}>
            <DetailInformationStyle>
              <DetailCarouselStyle>
                <ProjectCarousel images={project.images} />
              </DetailCarouselStyle>
              <DetailTextStyle> {project.description} </DetailTextStyle>
            </DetailInformationStyle>
          </Col>
          <Col breakPoint={{ xs: 12, sm: 12, md: 5, lg: 4 }}>
            <ProjectStateCard project={project} />
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
          <Col breakPoint={{ xs: 12, md: 7, lg: 8 }}> {CardDetailDocuments} </Col>
          <Col breakPoint={{ xs: 12, md: 5, lg: 4 }}>
            <CompanyCard company={project.company} />
          </Col>
        </Row>
      </Container>
    </DetailStyle>
  );
};

export default ProjectDetail;
