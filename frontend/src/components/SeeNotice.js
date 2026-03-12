import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllNotices } from '../redux/noticeRelated/noticeHandle';
import TableViewTemplate from './TableViewTemplate';
import styled from 'styled-components';

const SeeNotice = () => {
    const dispatch = useDispatch();

    const { currentUser, currentRole } = useSelector(state => state.user);
    const { noticesList, loading, error, response } = useSelector((state) => state.notice);

    useEffect(() => {
        if (currentRole === "Admin") {
            dispatch(getAllNotices(currentUser._id, "Notice"));
        }
        else {
            dispatch(getAllNotices(currentUser.school._id, "Notice"));
        }
    }, [dispatch]);

    if (error) {
        console.log(error);
    }

    const noticeColumns = [
        { id: 'title', label: 'Title', minWidth: 170 },
        { id: 'details', label: 'Details', minWidth: 100 },
        { id: 'date', label: 'Date', minWidth: 170 },
    ];

    const noticeRows = noticesList.map((notice) => {
        const date = new Date(notice.date);
        const dateString = date.toString() !== "Invalid Date" ? date.toISOString().substring(0, 10) : "Invalid Date";
        return {
            title: notice.title,
            details: notice.details,
            date: dateString,
            id: notice._id,
        };
    });
    return (
        <NoticeWrapper>
            {loading ? (
                <LoadingText>Loading notices...</LoadingText>
            ) : response ? (
                <EmptyText>No notices yet</EmptyText>
            ) : (
                <>
                    <NoticeTitle>Notices</NoticeTitle>
                    {Array.isArray(noticesList) && noticesList.length > 0 &&
                        <TableViewTemplate columns={noticeColumns} rows={noticeRows} />
                    }
                </>
            )}
        </NoticeWrapper>
    )
}

export default SeeNotice

const NoticeWrapper = styled.div`
  margin-top: 0;
`;

const NoticeTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  color: #e8e8f0;
  margin-bottom: 16px;
  letter-spacing: 0.3px;
`;

const LoadingText = styled.div`
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.4);
  padding: 20px 0;
`;

const EmptyText = styled.div`
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.3);
  padding: 20px 0;
`;