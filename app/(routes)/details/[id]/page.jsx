"use client"
import React, { useEffect, useState } from 'react'
import ProjectDetails from '../_components/ProjectDetails'
import { PROJECTS } from '@/utils/constants';

const Details = ({ params }) => {

    const [data, setData] = useState({});
    const { id } = params || {};

    useEffect(() => {
        ProjectFilter();
    }, [id]);


    const ProjectFilter = () => {
        const projectId = parseInt(id, 10); // Convert id from params to a number
        const project = PROJECTS.find((item) => {
            return item.id === projectId;
        });
        setData(project);
    }


    return (
        <div>
            <ProjectDetails data={data} />
        </div>
    )
}

export default Details