import React from 'react';
import Home from '@/components/pages/Home';
import Header from '@/components/widgets/Header';
import {HEADERS} from "@/utils";

export default function View() {
  return (
      <main>
        <Header items={HEADERS}/>
        <Home />
      </main>
  );
}
