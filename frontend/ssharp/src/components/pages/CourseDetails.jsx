import React from 'react';
import Layout from '../../common/Layout';
import { CourseDetails } from '../layouts/courseDetails/index';
import ShareButton from '../widgets/share/ShareButton';
import BookMarkButton from '../widgets/bookmark/BookMarkButton';
import { ToastContainer } from 'react-toastify';
import Report from '../../admin/components/Report';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

const PostSideDiv = styled.div`
    position: fixed;
    left: 20px;
    top: 330px;
    z-index: 1000;
`;

const CourseDetails01 = () => {
    const { id: postId } = useParams();

    return (
        <div className="course-page">
            <Layout>
                <CourseDetails />
                <PostSideDiv>
                    <BookMarkButton postId={postId} />
                    <ShareButton />
                    <Report />
                </PostSideDiv>
            </Layout>
            <ToastContainer />
        </div>
    );
};

export default CourseDetails01;
