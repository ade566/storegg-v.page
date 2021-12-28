import GetStarted from './get-started';
import MenuItem from './menu-item';
import Profile from './profile';

export default function SideBar() {
  return (
    <section className="sidebar">
      <div className="content pt-50 pb-30 ps-30">
        {/* Profile */}
        <Profile />
        {/* Menu */}
        <div className="menus">
          {/* overview */}
          <MenuItem svg="overview" active title="Overview" />
          {/* transactions */}
          <MenuItem svg="transaction" href="/transactions" title="Transactions" />
          {/* Messages */}
          <MenuItem svg="messages" title="Messages" />
          {/* Card */}
          <MenuItem svg="card" title="Card" />
          {/* Rewards */}
          <MenuItem svg="rewards" title="Rewards" />
          {/* editProfile */}
          <MenuItem svg="settings" href="/edit-profile" title="Settings" />
          {/* Log Out */}
          <MenuItem svg="logout" title="Log Out" />
        </div>
        {/* Get Started */}
        <GetStarted />
      </div>
    </section>
  )
}
