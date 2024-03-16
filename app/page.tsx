/**
 ১. প্রতিটা উদ্যোক্তার মূলধন কোম্পানি মূলধনের কত %
 ২. প্রোডাক্ট এর লিস্ট (কোন প্রোডাক্ট কত টাকায় কিনা হইসে)
 ৩. আনুসাঙ্গিক কোর্স আর তালিকা 
 ৪. ২ + ৩ যোগ করে মোট খরচ দেখাবে 
 ৫. সকল উদ্যোক্তার খরচ কত % তা দেখাবে 
 ৬. প্রোডাক্ট সেল করার পরে খরচ এবং লাভ বের করা (প্রতিটা উদ্যোক্তার মূলধরে উপর ভিত্তি করে লেভার ভাগ পাবে)

 * company capital: all entrepreneur's capital and company capital will be calculate based on %. let's say 100%
 * what is the percentage of each entrepreneur capital in %. it's calculate from company capital percentage (from 100% of company capital)
 * buying products list (include products buying price)
 * list of accessories course or products with buying price
 * total cost of actual products and accessories/course products
 * cost from company capital in % (all entrepreneur's cost in %)
 * after sell all products calculate cost and profit (profit = sellingPrice - cost/buyingPrice)
 * share profit based on entrepreneur's capital
 * 
 * create a form with 2 field (entrepreneur's name and his capital). after each submission add it on company capita and calculate entrepreneur's capital in %
 * create a form with 2 field (product name and it's buying price). show products list with it's name, price and sell button
 * create a form with 2 field (accessories/course name and i'ts buying price). show accessories/course list with it's name price and sell button
 * calculate total cost by summation of products and accessories/course price
 * show all entrepreneur's cost or company cost in %
 * after sell all products calculate cost and profile and show it
 * share profit based on entrepreneur's capital and how it
 * 
 * @returns something good
 */

"use client";

import { Courses } from "@/components/Courses";
import { EntrepreneursCapital } from "@/components/EntrepreneursCapital";
import { Form } from "@/components/Form";
import { Products } from "@/components/Products";
import { calculatePrice } from "@/utils/calculateprice";
import { useState } from "react";

export default function Home() {
  const [entrepreneurs, setEntrepreneur] = useState<any>([]);
  const [products, setProduct] = useState<any>([]);
  const [courses, setCourse] = useState<any>([]);

  const handleEntrepreneur = (e: any) => {
    e.preventDefault();

    const newEntrepreneur = {
      entrepreneurName: e.target.entrepreneurName.value,
      entrepreneurCapital: e.target.entrepreneurCapital.value,
    };
    setEntrepreneur([...entrepreneurs, newEntrepreneur]);

    e.target.entrepreneurName.value = "";
    e.target.entrepreneurCapital.value = "";
  };

  const handleProduct = (e: any) => {
    e.preventDefault();

    const newProduct = {
      productName: e.target.productName.value,
      productPrice: e.target.productPrice.value,
    };
    setProduct([...products, newProduct]);

    e.target.productName.value = "";
    e.target.productPrice.value = "";
  };

  const handleCourse = (e: any) => {
    e.preventDefault();

    const newCourse = {
      courseName: e.target.courseName.value,
      coursePrice: e.target.coursePrice.value,
    };
    setCourse([...courses, newCourse]);

    e.target.courseName.value = "";
    e.target.coursePrice.value = "";
  };

  const allProductPrice = calculatePrice(products);
  const allCoursePrice = calculatePrice(courses);

  return (
    <main className="flex justify-between p-10">
      <div className="flex flex-col items-center justify-center gap-5">
        <Form
          handleSubmit={handleEntrepreneur}
          textTypeName="entrepreneurName"
          numberTypeName="entrepreneurCapital"
          buttonText="Add Entrepreneur"
        />
        <Form
          handleSubmit={handleProduct}
          textTypeName="productName"
          numberTypeName="productPrice"
          buttonText="Add Product"
        />
        <Form
          handleSubmit={handleCourse}
          textTypeName="courseName"
          numberTypeName="coursePrice"
          buttonText="Add Course"
        />
      </div>

      <div className="flex flex-col gap-5">
        <h2>Total Cost: {allProductPrice + allCoursePrice}</h2>
        <Products products={products} />
        <Courses courses={courses} />
      </div>
      <EntrepreneursCapital entrepreneurs={entrepreneurs} />
    </main>
  );
}
