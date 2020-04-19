import React from "react"
import PropTypes from "prop-types"
import { Row, Col } from 'antd';

const Container = ({ children }) => {
  return (
    <>
      <Row justify="center">
        <Col span={18}>
          {children}
        </Col>
      </Row>
    </>
  )
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Container
