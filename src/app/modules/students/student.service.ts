import { StudentModel } from '../student.model';
import { Student } from './students.interface';

const createStudentIntoDB = async (student: Student) => {
  const result = await StudentModel.create();
  return result;
};

export const studentServices = {
  createStudentIntoDB,
};
