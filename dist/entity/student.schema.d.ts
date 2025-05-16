import * as mongoose from 'mongoose';
export declare const StudentSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    name?: string | null | undefined;
    age?: number | null | undefined;
    city?: string | null | undefined;
    department?: string | null | undefined;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    name?: string | null | undefined;
    age?: number | null | undefined;
    city?: string | null | undefined;
    department?: string | null | undefined;
}>, {}> & mongoose.FlatRecord<{
    name?: string | null | undefined;
    age?: number | null | undefined;
    city?: string | null | undefined;
    department?: string | null | undefined;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
