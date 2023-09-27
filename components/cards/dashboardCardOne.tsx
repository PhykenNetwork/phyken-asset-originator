import React from 'react';
import Link from 'next/link';
import { CardTwoItemProps } from '@/types/cards';
import Image from 'next/image';
import ChartOne from '../Charts/ChartOne';

const DashboardCardOne: React.FC<CardTwoItemProps> = ({ imageSrc, name, count, url }) => {
  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <ChartOne />
    </div>
  );
};

export default DashboardCardOne;
