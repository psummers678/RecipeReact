import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import './formik.css'

export default class SignupForm extends React.Component {
    render() {
        return (
            <>
                <Formik initialValues={{ email: '', }}
                    validationSchema={Yup.object({
                        email: Yup.string().required("Required")
                    })}
                    onSubmit={(values: any) => {
                        alert(JSON.stringify(values, null, 2))
                    }}
                >
                    <Form>
                        <label htmlFor="email">Email Address</label>
                        <Field className="form-control" type="text" name="email" required></Field>
                        <button className="btn" type="submit">Submit</button>
                    </Form>
                </Formik>
            </>
        );
    }
}
