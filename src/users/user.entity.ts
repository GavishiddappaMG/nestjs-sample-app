import { Report } from 'src/reports/report.entity';
import {
  AfterInsert,
  Entity,
  Column,
  PrimaryGeneratedColumn,
  AfterUpdate,
  AfterRemove,
  OneToMany,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({ default: true })
  admin: boolean;

  @OneToMany(() => Report, (report) => report.user)
  reports: Report[];

  @AfterInsert()
  logInsert() {
    console.log('Inserted User with Id ', this.id);
  }

  @AfterUpdate()
  logUpdate() {
    console.log('Updatetd User with Id ', this.id);
  }

  @AfterRemove()
  logRemove() {
    console.log('Removed User with Id ', this.id);
  }
}
