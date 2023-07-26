"use client";
import { servicesService } from "@/apis/services-service";
import { ServiceModel } from "@/models/service-model";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import styled from "styled-components";

const SButton = styled(Button)`
  background-color: red;
  &:hover {
    background-color: orange;
  }
`;

export default function HomePage() {
  const [services, setServices] = useState<ServiceModel[]>([]);

  const fetch = async () => {
    const data = servicesService.getServices();

    setServices(data);
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <main>
      <h1>Home</h1>
      <SButton variant="contained">Hello World</SButton>
      {services.map((service) => (
        <div key={service.id}>
          <h2>{service.service}</h2>
          <p>{service.status}</p>
        </div>
      ))}
    </main>
  );
}
