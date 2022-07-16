import React, {memo, useContext, useEffect, useMemo, useState} from "react";
import {getShortWeekDay, getWeekDay} from "../../../../scripts/GetWeekDayTitle";
import {DateContext} from "../../../../components/providers/DataContext";
import {IDayElement} from "./interfaces";
import {Date, DayElementContainer, DayElementLine, WeekDayTitle} from "./style";
import useViewport from "../../../../hooks/useViewport";


const CalendarItem = memo((props: IDayElement) => {

    const {date} = props;
    const {selectedDay} = useContext(DateContext);
    const isSelected = useMemo(() => date.getTime() === selectedDay.getTime(), [date, selectedDay]);
    const [isShort, setIsShort] = useState<boolean>(false);
    const {width} = useViewport();

    useEffect(() => {
        if (width < 968) {
            setIsShort(true);
        } else {
            setIsShort(false);
        }
    }, []);

    return useMemo(() => (
        <DayElementContainer isSelected={isSelected}>
            <WeekDayTitle isSelected={isSelected}>{isShort ? getShortWeekDay(date) : getWeekDay(date)}</WeekDayTitle>
            <DayElementLine/>
            <Date isSelected={isSelected}>{date.toLocaleString('ru', {
                day: '2-digit'
            })}</Date>
        </DayElementContainer>
    ), [isShort, isSelected]);
});


export {CalendarItem};