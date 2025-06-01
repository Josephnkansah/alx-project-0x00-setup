import React from 'react'
import Card from "@/components/Card";
import Button from "@/components/Button";
const Landing: React.FC =  () => {
    return (
      <div>
        <h1 className=" text-xl font-extralight">Landing Page</h1>
        <Card />
      </div>
    )
  }
        export default function Landing() {
          return (
            <div className="p-8">
              <h1 className="text-3xl font-bold mb-6">Landing Page</h1>
        
              {/* Small Buttons */}
              <div className="flex gap-4 mb-6">
                <Button title="Small Rounded-sm" styles="text-sm rounded-sm" />
                <Button title="Small Rounded-md" styles="text-sm rounded-md" />
                <Button title="Small Rounded-full" styles="text-sm rounded-full" />
              </div>
        
              {/* Medium Buttons */}
              <div className="flex gap-4 mb-6">
                <Button title="Medium Rounded-sm" styles="text-base rounded-sm" />
                <Button title="Medium Rounded-md" styles="text-base rounded-md" />
                <Button title="Medium Rounded-full" styles="text-base rounded-full" />
              </div>
        
              {/* Large Buttons */}
              <div className="flex gap-4">
                <Button title="Large Rounded-sm" styles="text-lg rounded-sm" />
                <Button title="Large Rounded-md" styles="text-lg rounded-md" />
                <Button title="Large Rounded-full" styles="text-lg rounded-full" />
              </div>
            </div>
          )
        }
  export default Landing