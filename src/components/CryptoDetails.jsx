import React from 'react'
import HTMLReactParser from 'html-react-parser';
import { useParams } from 'react-router-dom';
import millify from 'millify';
import { Row, Col, Typography, Select } from 'antd'
import { MoneyCollectOutlined, DollarCircleOutlined, FundOutlined, ExclamationCircleOutlined, StopOutlined, TrophyOutlined, CheckOutlined, NumberOutlined, ThunderboltOutlined } from '@ant-design/icons';

import { useGetCryptoDetailsQuery } from '../services/cryptoApi';

const { Title, Text } = Typography
const { Option } = Select

const CryptoDetails = () => {
  const { coinId } = useParams()
  const { data, isFetching } = useGetCryptoDetailsQuery(coinId)
  const cryptoDetails = data?.data?.coin
  console.log(cryptoDetails)

  return (
    <div>
      CryptoDetails<br />
      ID: {coinId}
    </div>
  )
}

export default CryptoDetails
