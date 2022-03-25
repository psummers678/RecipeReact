import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './IngredientForm.css'
import IngredientInterface from '../../models/IngredientInterface';
import IngredientService from '../../service/IngredientService';

export default class IngredientForm extends React.Component<{ ingredientId: number }, { ingredient: IngredientInterface }>  {
    constructor(props: { ingredientId: number }) {
        super(props);
        this.state = {
            ingredient: {
                ingredientId: this.props.ingredientId,
                ingredientName: "hello",
                foodType: "FRUIT",
                storageType: "FRIDEE",
                shelfLife: 5,
                shelfLifeUnit: "DAYS",
                price: 5,
                shopName: "Tescos",
            }
        };
    }

    retrieveIngredient() {
        new IngredientService().GetIngredientById(this.state.ingredient.ingredientId).then(
            (response) => {
                this.setState({
                    ingredient: response.data
                })
            }
        )
    }
    componentDidMount() {
        this.retrieveIngredient();

    }

    render() {
        return (
            <>
                <Formik initialValues={{ ingredientId: this.state.ingredient.ingredientId, }}
                    validationSchema={Yup.object({
                        ingredientName: Yup.string().required("Required")
                    })}
                    onSubmit={(values: any) => {
                        alert(JSON.stringify(values, null, 2))
                    }}
                >
                    <Form>
                        <Field type="number" name="ingredientId" hidden required></Field>
                        
                        <label htmlFor="ingredientName">{this.state.ingredient.ingredientName}</label>
                        <Field className="form-control" type="text" name="ingredientName" required></Field>
                        <ErrorMessage name="ingredientName" />
                        
                        <label htmlFor="price">Price: {this.state.ingredient.price}</label>
                        <Field className="form-control" type="number" name="price" required></Field>
                        <ErrorMessage name="price" />

                        <label htmlFor="shelfLife">ShelfLife: {this.state.ingredient.shelfLife}</label>
                        <Field className="form-control" type="number" name="shelfLife" required></Field>
                        <ErrorMessage name="shelfLife" />
                        
                        <label htmlFor="shelfLifeUnit">ShelfLifeUnit: {this.state.ingredient.shelfLifeUnit}</label>
                        <Field className="form-control" type="string" name="shelfLifeUnit" required></Field>
                        <ErrorMessage name="shelfLifeUnit" />

                        <label htmlFor="foodType">FoodType: {this.state.ingredient.foodType}</label>
                        <Field className="form-control" type="text" name="foodType" required></Field>
                        <ErrorMessage name="foodType" />

                        <label htmlFor="storageType">StorageType: {this.state.ingredient.storageType}</label>
                        <Field className="form-control" type="text" name="storageType" required></Field>
                        <ErrorMessage name="storageType" />

                        <button className="btn" type="submit">Submit</button>
                    </Form>
                </Formik>
            </>
        );
    }
}