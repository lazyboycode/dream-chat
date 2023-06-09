import { MdReportProblem } from 'react-icons/md';
import { FaComments, FaGlobeAsia, FaCommentDots, FaCogs } from 'react-icons/fa';

import SideNavLink from './SideNavLink';

const SideNav = () => {
	return (
		<div className='grid gap-4 grid-rows-3 p-2 py-4 h-full'>
			<div className='space-y-4'>
				<SideNavLink icon={FaComments} href='/chats'>
					All Chats
				</SideNavLink>
				<SideNavLink icon={FaGlobeAsia} href='/free-for-all'>
					Free for All
				</SideNavLink>
			</div>
			<div className='space-y-4 self-center'>
				<SideNavLink icon={FaCommentDots} href='/suggestions'>
					Suggestions
				</SideNavLink>
				<SideNavLink icon={MdReportProblem} href='/reports'>
					Reports
				</SideNavLink>
			</div>
			<div className='space-y-4 self-end'>
				<SideNavLink icon={FaCogs} href='/settings'>
					Settings
				</SideNavLink>
			</div>
		</div>
	);
};

export default SideNav;
