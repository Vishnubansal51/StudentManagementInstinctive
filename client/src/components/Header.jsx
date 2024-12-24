
const Header = () => (
  <header className="flex justify-between items-center p-4 ">

    
    {/* Search Bar */}
    <div className="flex items-center bg-white rounded-lg p-2 w-1/3">
  <img src="/icons/search-icon.png" alt="Search" className="w-4 h-4 mr-2" />
  <input
    type="text"
    placeholder="Search your course"
    className="bg-white outline-none text-sm w-full"
  />
</div>

    {/* Action Icons and Profile */}
    <div className="flex items-center gap-10">
      {/* Action Icons */}
      <div className="flex items-center gap-10">
        <img src="/icons/help-icon.png" alt="Help" className="w-6 h-6" />
        <div className="relative">
  {/* Icon */}
  <img src="/icons/message-icon.png" alt="Messages" className="w-6 h-6" />
  
  {/* Notification Dot */}
  <span className="absolute top-0 right-0 bg-red-500 rounded-full w-2 h-2"></span>
</div>
        <img src="/icons/settings-icon.png" alt="Settings" className="w-6 h-6" />
        <div className="relative">
          <img src="/icons/notification-icon.png" alt="Notifications" className="w-6 h-6" />
          <span className="absolute top-0 right-0 bg-red-500 rounded-full w-2 h-2">
          </span>
        </div>
      </div>

      {/* User Profile */}
      <div className="flex items-center gap-2">
        <img
          src="/icons/profile-image.png"
          alt="Profile"
          className="w-8 h-8 rounded-full"
        />
        <span className="text-sm font-semibold text-gray-800">Adeline H. Dancy</span>
      </div>
    </div>
  </header>
);

export default Header;
