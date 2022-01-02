import GetStarted from './get-started';
import MenuItem from './menu-item';
import Profile from './profile';

interface SideBarProps {
  activeMenu: String;
}

export default function SideBar(props: SideBarProps) {
  const { activeMenu } = props;
  return (
    <section className="sidebar">
      <div className="content pt-50 pb-30 ps-30">
        {/* Profile */}
        <Profile />
        {/* Menu */}
        <div className="menus">
          {/* overview */}
          <MenuItem svg="overview" active={activeMenu === 'overview'} title="Overview" />
          {/* transactions */}
          <MenuItem
            svg="transaction"
            active={activeMenu === 'transactions' || activeMenu === 'transactions-detail'}
            href="/transactions"
            title="Transactions"
          />
          {/* Messages */}
          <MenuItem svg="messages" active={activeMenu === 'messages'} title="Messages" />
          {/* Card */}
          <MenuItem svg="card" active={activeMenu === 'card'} title="Card" />
          {/* Rewards */}
          <MenuItem svg="rewards" active={activeMenu === 'rewards'} title="Rewards" />
          {/* editProfile */}
          <MenuItem svg="settings" active={activeMenu === 'edit-profile'} href="/edit-profile" title="Settings" />
          {/* Log Out */}
          <MenuItem svg="logout" title="Log Out" />
        </div>
        {/* Get Started */}
        <GetStarted />
      </div>
    </section>
  )
}
