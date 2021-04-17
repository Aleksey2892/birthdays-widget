import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { widgetOperations } from '../../app/widget';
import Container from '../../components/Container';
import Today from '../../components/Today';

export default function TodayView() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(widgetOperations.getTodayBirthdays());
  });

  return (
    <Container>
      <Today />
    </Container>
  );
}
