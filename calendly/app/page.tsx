"use client";
import React from "react";
import { InlineWidget } from "react-calendly";

export default function Home() {
  return (
    <div style={{ height: '100vh', overflow: 'hidden' }}>
      <InlineWidget 
        styles={{ 
          height: '100%',
          overflow: 'hidden'
        }} 
        url="https://calendly.com/raymondo-booking-page/free-demo-call" 
        pageSettings={{ 
          hideEventTypeDetails: true, 
          hideLandingPageDetails: false 
        }} 
      />
    </div>
  );
}