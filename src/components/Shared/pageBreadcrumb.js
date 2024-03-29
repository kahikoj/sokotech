import React from 'react';
import { Link } from "react-router-dom";
import { Container, Row, Col, Breadcrumb, BreadcrumbItem } from "reactstrap";

const PageBreadcrumb = (props) => {
    const length = props.pathItems.length;
    return (
        <React.Fragment>
            <section className="bg-half bg-light d-table w-100">
                <Container>
                    <Row className="justify-content-center">
                        <Col lg="12" className="text-center">
                            <div className="page-next-level">
                                { props.title ? <h4 className="title"> {props.title}</h4> : null }
                                { props.children ? props.children : null }
                                <div className="page-next">
                                    <nav className="d-inline-block">
                                    <Breadcrumb aria-label="breadcrumb" listClassName="bg-white rounded shadow mb-0">
                                    {
                                        props.pathItems.map((item, key) =>
                                            item.id !== length
                                            ? <BreadcrumbItem key={key}><Link to={item.link} className="text-uppercase font-weight-bold text-dark mr-1">{item.name}</Link></BreadcrumbItem>
                                            : <BreadcrumbItem key={key} active aria-current="page">
                                                {item.name}
                                              </BreadcrumbItem>
                                        )
                                    }
                                    </Breadcrumb>
                                     </nav>
                                </div>
                            </div>
                        </Col>  
                    </Row>
                </Container> 
            </section>
        </React.Fragment>
    );
}

export default PageBreadcrumb;
