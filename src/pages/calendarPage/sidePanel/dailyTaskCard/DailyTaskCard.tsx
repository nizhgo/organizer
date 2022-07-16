import React, {useContext, useEffect, useState} from "react";
import Card from "../../../../ui/Card";
import EditIcon from '../../../../assets/images/edit_FILL0_wght400_GRAD0_opsz40.svg'
import DeleteIcon from '../../../../assets/images/delete_forever_FILL0_wght400_GRAD0_opsz40.svg'
import {Input, TextArea} from "../../../../ui/Input";
import {ITask, OrganizerContext} from "../../../../components/providers/OrganizerContext";
import {SmallButton} from "../../../../ui/Buttons";
import {
    CardBody,
    CardTitle,
    DailyTaskContainer,
    DailyTaskGridContainer,
    DailyTaskMenuIcon,
    TaskContainer
} from "./style"

const DailyTaskCard = (props: ITask) => {
    const {DeleteTask, UpdateTask} = useContext(OrganizerContext);
    const {title, body} = props;
    const [isEdit, setIsEdit] = useState<boolean>(false);
    const [titleText, setTitleText] = useState<string>(title);
    const [bodyText, setBodyText] = useState<string>(body);
    const del = async () => {
        DeleteTask(props);
    };

    useEffect(() => {
        if (!isEdit) {
            SaveEditedTask();
        }
    }, [isEdit]);

    const SaveEditedTask = () => {
        setIsEdit(false);
        if (titleText !== title || bodyText !== body) {
            UpdateTask({...props, title: titleText, body: bodyText});
        }
    }


    return (
        <Card>
            <DailyTaskGridContainer>
                <DailyTaskContainer>
                    {
                        isEdit ?
                            <TaskContainer>
                                <Input value={titleText} onChange={e => setTitleText(e.target.value)}/>
                                <TextArea value={bodyText} onChange={e => setBodyText(e.target.value)}/>
                                <SmallButton onClick={() => setIsEdit(false)}>Созранить</SmallButton>
                            </TaskContainer>
                            :
                            <TaskContainer>
                                <CardTitle>{titleText}</CardTitle>
                                <CardBody>{bodyText}</CardBody>
                            </TaskContainer>
                    }
                </DailyTaskContainer>
                <form style={{display: 'flex', alignItems: 'start', justifyContent: 'space-between'}}>
                    <button onClick={() => setIsEdit(prev => !prev)} type={'button'}><DailyTaskMenuIcon src={EditIcon}/>
                    </button>
                    <button onClick={del} type={'button'}><DailyTaskMenuIcon src={DeleteIcon}/></button>
                </form>
            </DailyTaskGridContainer>


        </Card>
    )
}

export default DailyTaskCard;