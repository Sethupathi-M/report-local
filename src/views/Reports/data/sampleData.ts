import { faker } from '@faker-js/faker';
import { IndexReportColumnField } from '../../../interfaces/reportTypes';

const generateRandomDateWithinLast30Days = (): string => {
  const today = new Date();
  const pastDate = new Date(today);
  pastDate.setDate(today.getDate() - Math.floor(Math.random() * 30));

  return pastDate.toISOString();
};

const sampleData = Array.from({ length: 150 }, (_, id) => ({
  id,
  [IndexReportColumnField.MyNumber]: Math.floor(Math.random() * 101),
  [IndexReportColumnField.MyDate]: generateRandomDateWithinLast30Days(),
  [IndexReportColumnField.MyText]: faker.lorem.sentence(),
  [IndexReportColumnField.MyCheckBoxList]: faker.helpers.arrayElement(['Value1', 'Value2', 'Value3', 'Value4']),
}));

export default sampleData;
