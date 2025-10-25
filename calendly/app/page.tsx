"use client";
import React from "react";
import { InlineWidget } from "react-calendly";

export default function Home() {
  return (
    <InlineWidget url="https://calendly.com/raymondo-booking-page/free-demo-call" pageSettings={{ hideEventTypeDetails: true, hideLandingPageDetails: false }} />
  );
}