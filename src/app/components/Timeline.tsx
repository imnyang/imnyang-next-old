import './timeline.css';

const events = [
    { date: '2024-12-07', description: '??? ???? ?? ?? ??? ?? (??: ????)', link: 'https://ncf.or.kr/', status: 'goahead' },
    { date: '2024-08-18', description: '29회 해킹캠프 CTF 1위 (고민중독)', link: 'https://ctf.hackingcamp.org/', status: 'success' },
    { date: '2024-08-05', description: '29회 해킹캠프 선발', link: 'https://hackingcamp.org/', status: 'success' },
    { date: '2024-08-01', description: '글로벌 스타트업 학교 2기 베트남 해외 연수 데모데이 대상 (1위)', link: 'http://ncf.or.kr', status: 'success' },
    { date: '2024-05-16', description: '글로벌 스타트업 학교 2기 합격', link: 'http://ncf.or.kr', status: 'success' },
    { date: '2024-05-11', description: 'LG AI 청소년 캠프 1기 LG 탐색상 수상', link: 'https://lgaiyouthcamp.or.kr/', status: 'success' },
    { date: '2024-05-11', description: 'LG AI 청소년 캠프 1기 수료', link: 'https://lgaiyouthcamp.or.kr/', status: 'success' },
    { date: '2024-04-22', description: '@isangjeong.today (인천상정중학교의 오늘 급식)', link: 'https://www.instagram.com/isangjeong.today/', status: 'success' },
    { date: '2024-04-06', description: 'TimeTable (Sekai 개조판 배포) [API 유실]', link: 'https://timeline.imnyang.xyz', status: 'dead' },
    { date: '2024-03-24', description: 'Dreamhack #133', link: 'https://dreamhack.io/users/40116/wargame', status: 'success' },
    { date: '2024-03-24', description: 'Ubuntu Mirror', link: 'https://launchpad.net/ubuntu/+mirror/mirror.imnyang.xyz-release', status: 'success' },
    { date: '2024-03-24', description: '내 목소리로 AI Cover 만들기', link: 'https://colab.research.google.com/drive/1a4G4hD9huBeGRZhEL2HNDMpqSuf4y61k?usp=sharing', status: 'success' },
    { date: '2024-01-26', description: 'Fastapi를 통해 API 제작', link: 'https://github.com/imnyang/api', status: 'dead' },
    { date: '2023-12-20', description: 'LG AI 청소년 캠프 1기 합격', status: 'success' },
    { date: '2023-11-14', description: '인천상정중학교 2023학년도 SW 문제 해결 활동 우수상(2위) 수여', status: 'success' },
    { date: '2023-11-01', description: '블로그 시작', link: 'https://blog.imnyang.xyz', status: 'secondary' },
    { date: '2023-10-12', description: '나는 로컬 시간을 알고 싶다', link: 'https://time.imnyang.xyz/', status: 'success' },
    { date: '2023-09-24', description: 'sqlr.kr 기획 및 초기 개발', link: 'https://github.com/sqlare/sqlr.kr/tree/main', status: 'success' },
    { date: '2023-09-02', description: '선린인터넷고등학교 제6회 소프트웨어나늠축제 Layer7 부서 과정 이수', status: 'success' },
    { date: '2023-08-26', description: '컴시간 시간표를 더 나아보이게 Sekai', link: 'https://github.com/imnyang/Sekai', status: 'dead' },
    { date: '2023-08-23', description: '디스코드 통화방 녹음', link: 'https://github.com/imnyang/discord-voice-rec', status: 'dead' },
    { date: '2023-07-24', description: '한국정보기술연구원이 주도하는 사이버 가디언즈 보안캠프 수료', status: 'success' },
    { date: '2023-03-20', description: '디스코드에서 대화형 인공지능 Siru 제작', link: 'https://github.com/imnyang/siru', status: 'success' },
    { date: '2023-05-15', description: '한국 코드페어 예선 진출', status: 'success' },
    { date: '2023-03-14', description: '타이머', link: 'https://github.com/imnyang/imnyang-timer', status: 'success' },
    { date: '2022-12-20', description: '2022 SW영재 창작대회 은상 수상', status: 'success' },
    { date: '2022-09-27', description: '2022 삼성 주니어 SW 창작대회 본선 진출', status: 'success' },
    { date: '2022-05-23', description: '2022학년도 석정초SW영재학급 첫 수업', status: 'success' },
    { date: '2022-07-26', description: '제 14회 맑은하늘 맑은웃음 공모전에서 맑은웃음상 수여', status: 'success' },
    { date: '2021-11-14', description: 'Become a ZEPETO Creator 이수', status: 'success' },
    { date: '2021-05-19', description: '소프트웨어와 전자신문이 주관한 소프트웨어재단 꿈찾기 캠프 이수', status: 'success' },
    { date: '2018-01-27', description: '제4회 맑은하늘 맑은웃음 어린이 문예공모전에서 위닉스상(2위) 수여', status: 'success' },
];

import React from 'react';

interface TimelineProps {
    h: number;
}

export default function Timeline({ h }: TimelineProps) {
    return (
        <div style={{ height: `${h}px`, overflowY: 'auto' }}>
            {events.map((event, index) => (
                <p className="nanum-gothic-coding-regular" key={index}>
                    {event.date} | {event.link ? <a href={event.link}>{event.description}</a> : event.description}
                </p>
            ))}
        </div>
    );
}