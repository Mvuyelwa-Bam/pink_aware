import React, { useState } from 'react';
import { Heart, HandHeart, Users, CalendarDays, Inbox, FileText, Gift, X, Menu, LayoutDashboard, MessageCircle, Folder, CheckCircle, Clock, ArrowLeft, Send } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

// Reusable Navigation Link Component
const NavLink = ({ children, onClick }) => (
  <button
    onClick={onClick}
    className="text-gray-700 hover:text-pink-600 font-medium transition-colors duration-300 px-4 py-2"
  >
    {children}
  </button>
);

// Article Card Component for Awareness Hub
const ArticleCard = ({ title, content, image, onClick }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.3 }}
    className="bg-white rounded-3xl border border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer transform hover:-translate-y-2"
    onClick={onClick}
  >
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{content}</p>
    </div>
  </motion.div>
);

// Dashboard Card Component for the Internal Dashboard
const DashboardCard = ({ title, icon, children }) => (
  <div className="bg-white rounded-2xl border border-gray-200 shadow-xl p-6 flex flex-col items-start">
    <div className="bg-pink-100 text-pink-600 p-4 mb-4 self-start rounded-xl">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-gray-800 mb-4">{title}</h3>
    <div className="w-full">
      {children}
    </div>
  </div>
);

// Login Landing Page Component
const LoginLandingPage = ({ setCurrentPage }) => (
  <div className="relative overflow-hidden min-h-[calc(100vh-8rem)] flex flex-col justify-center items-center py-16">
    <div className="absolute inset-0 z-0 opacity-40 animate-silky-wave" />

    <div className="relative z-10 container mx-auto px-4 text-center max-w-4xl bg-white bg-opacity-80 p-10 rounded-3xl shadow-2xl">
      <h2 className="text-5xl md:text-7xl font-extrabold text-gray-800 leading-tight tracking-tighter">
        Uniting for a <span className="text-pink-600">Future Without Cancer</span>
      </h2>
      <p className="mt-8 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
        Pink Aware is a nonprofit organization dedicated to raising breast cancer awareness, supporting survivors, and funding critical research. Together, we can make a difference.
      </p>
      <div className="mt-12 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
        <button
          onClick={() => setCurrentPage('login')}
          className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-8 rounded-full shadow-lg border-b-4 border-pink-800 transition-all duration-300 transform hover:scale-105"
        >
          Login
        </button>
        <button
          onClick={() => setCurrentPage('signup')}
          className="bg-white hover:bg-gray-100 text-pink-600 font-bold py-3 px-8 rounded-full shadow-lg border border-gray-300 transition-all duration-300 transform hover:scale-105"
        >
          Sign Up
        </button>
      </div>
    </div>
  </div>
);

// Login Page Component
const LoginPage = ({ onLogin, setCurrentPage }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username && password) {
      onLogin(username);
    }
  };

  return (
    <div className="container mx-auto px-4 py-16 flex justify-center items-center min-h-[calc(100vh-8rem)]">
      <div className="bg-white p-8 md:p-12 shadow-lg max-w-lg w-full rounded-2xl">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Log In to Your Dashboard</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 transition-colors duration-300" />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 transition-colors duration-300" />
          <div className="text-center">
            <button type="submit" className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-8 rounded-full shadow-lg border-b-4 border-pink-800 transition-all duration-300 transform hover:scale-105">
              Log In
            </button>
          </div>
        </form>
        <div className="text-center mt-6">
          <p className="text-sm text-gray-600">Don't have an account? <span className="text-pink-600 cursor-pointer" onClick={() => setCurrentPage('signup')}>Sign up here!</span></p>
        </div>
      </div>
    </div>
  );
};

// Signup Page Component
const SignupPage = ({ onSignup, setCurrentPage }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username && password) {
      onSignup(username);
    }
  };

  return (
    <div className="container mx-auto px-4 py-16 flex justify-center items-center min-h-[calc(100vh-8rem)]">
      <div className="bg-white p-8 md:p-12 shadow-lg max-w-lg w-full rounded-2xl">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Create an Account</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 transition-colors duration-300" />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 transition-colors duration-300" />
          <div className="text-center">
            <button type="submit" className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-8 rounded-full shadow-lg border-b-4 border-pink-800 transition-all duration-300 transform hover:scale-105">
              Sign Up
            </button>
          </div>
        </form>
        <div className="text-center mt-6">
          <p className="text-sm text-gray-600">Already have an account? <span className="text-pink-600 cursor-pointer" onClick={() => setCurrentPage('login')}>Log in here!</span></p>
        </div>
      </div>
    </div>
  );
};

// Awareness Hub Component
const AwarenessHub = () => {
  const articles = [
    {
      id: 1,
      title: "Understanding Breast Cancer: The Basics",
      intro: "An overview of breast cancer, including risk factors, symptoms, and the importance of early detection.",
      content: `### What is Breast Cancer?
      Breast cancer is a disease in which cells in the breast grow out of control. There are different kinds of breast cancer. The kind of breast cancer depends on which cells in the breast turn into cancer. Breast cancer can begin in different parts of the breast.
      
      ### Risk Factors
      While anyone can get breast cancer, certain factors can increase your risk, including age, family history, and lifestyle choices. Knowing your risk factors can help you make informed decisions about your health.
      
      ### Early Detection
      The key to successful treatment is early detection. Regular screenings like mammograms and self-exams can help find breast cancer at an early, treatable stage.`,
      image: "https://placehold.co/600x400/ffe4e6/a15a77?text=Breast+Awareness"
    },
    {
      id: 2,
      title: "The Power of Support: Survivor Stories",
      intro: "Read inspiring stories from breast cancer survivors who share their journey and resilience.",
      content: `### My Journey to Healing
      "When I was diagnosed, I felt like my world was ending. But with the support of my family, friends, and a community of fellow survivors, I found the strength to fight. Sharing my story is my way of giving back and showing others that they are not alone." - Jane D.
      
      ### Finding Strength in Community
      Support groups provide a safe space to share experiences, fears, and hopes. Many survivors find comfort in connecting with people who truly understand what they are going through. These communities offer a network of strength and support that can make a profound difference.`,
      image: "https://placehold.co/600x400/fff0f5/92536c?text=Survivor+Stories"
    },
    {
      id: 3,
      title: "Self-Examination: A Step-by-Step Guide",
      intro: "Learn how to perform a breast self-examination at home to help with early detection.",
      content: `### Why Self-Exams Matter
      Performing a breast self-exam regularly can help you become familiar with how your breasts normally look and feel, making it easier to notice any changes. It's an important step in taking charge of your breast health.
      
      ### How to Perform a Self-Exam
      **Step 1: In the Shower.** With your fingers flat, use the opposite hand to examine each breast. Use a circular motion to feel for any lumps, thickening, or changes.
      
      **Step 2: In Front of a Mirror.** Look for any changes in the size, shape, or color of your breasts. Look for any visible distortion, swelling, or changes in the nipples.
      
      **Step 3: Lying Down.** Lie flat on your back and place a pillow under your right shoulder. Use your left hand to examine your right breast, and vice-versa. This position helps spread out the breast tissue, making it easier to feel for lumps.`,
      image: "https://placehold.co/600x400/fff4f7/ab607d?text=Self+Examination"
    }
  ];
  const [selectedArticle, setSelectedArticle] = useState(null);

  return (
    <div className="container mx-auto px-4 py-16">
      <AnimatePresence mode="wait">
        {selectedArticle ? (
          <motion.div
            key="article-detail"
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -200 }}
            transition={{ duration: 0.3 }}
            className="max-w-4xl mx-auto"
          >
            <button
              onClick={() => setSelectedArticle(null)}
              className="flex items-center space-x-2 text-gray-600 hover:text-pink-600 mb-8 transition-colors duration-300"
            >
              <ArrowLeft size={20} />
              <span>Back to Articles</span>
            </button>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">{selectedArticle.title}</h2>
            <img src={selectedArticle.image} alt={selectedArticle.title} className="w-full h-80 object-cover mb-8 rounded-lg" />
            <div className="prose max-w-none text-gray-700">
              <p>{selectedArticle.content}</p>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="article-list"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Awareness Hub</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map(article => (
                <ArticleCard key={article.id} {...article} onClick={() => setSelectedArticle(article)} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};


// Volunteer Form Component
const VolunteerForm = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Volunteer form submitted!");
    setFormSubmitted(true);
  };

  return (
    <div className="container mx-auto px-4 py-16 flex justify-center items-center">
      <div className="bg-white p-8 md:p-12 shadow-lg max-w-2xl w-full rounded-2xl">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Become a Volunteer</h2>
        <p className="text-center text-gray-600 mb-8">
          Join our team and help us make a difference in the fight against breast cancer.
        </p>
        {formSubmitted ? (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 relative text-center rounded-lg">
            <span className="block sm:inline">Thank you for your interest! We'll be in touch soon.</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <input type="text" placeholder="Full Name" required className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 transition-colors duration-300" />
            <input type="email" placeholder="Email Address" required className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 transition-colors duration-300" />
            <input type="tel" placeholder="Phone Number" className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 transition-colors duration-300" />
            <textarea placeholder="Tell us about your interests and skills" rows="4" className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 transition-colors duration-300"></textarea>
            <div className="text-center">
              <button type="submit" className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-8 rounded-full shadow-lg border-b-4 border-pink-800 transition-all duration-300 transform hover:scale-105">
                Submit Application
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

// Donation Form Component
const DonationForm = () => {
  const [donationAmount, setDonationAmount] = useState('');
  const [donated, setDonated] = useState(false);

  const handleDonate = (e) => {
    e.preventDefault();
    if (donationAmount) {
      console.log(`Donation of $${donationAmount} processed.`);
      setDonated(true);
      setTimeout(() => {
        setDonated(false);
        setDonationAmount('');
      }, 3000);
    }
  };

  return (
    <div className="container mx-auto px-4 py-16 flex justify-center items-center">
      <div className="bg-white p-8 md:p-12 shadow-lg max-w-xl w-full rounded-2xl">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">Support Our Cause</h2>
        <p className="text-center text-gray-600 mb-8">
          Your donation helps us fund research, provide support, and raise awareness.
        </p>
        <form onSubmit={handleDonate} className="space-y-6">
          <div className="flex flex-col items-center">
            <label htmlFor="amount" className="text-gray-600 font-medium mb-2">Donation Amount ($)</label>
            <input
              type="number"
              id="amount"
              value={donationAmount}
              onChange={(e) => setDonationAmount(e.target.value)}
              placeholder="e.g., 50"
              required
              min="1"
              className="w-full md:w-1/2 text-center px-4 py-3 border border-gray-300 rounded-xl text-2xl font-bold focus:ring-2 focus:ring-pink-500 transition-colors duration-300"
            />
          </div>
          {donated && (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 relative text-center rounded-lg">
              <span className="block sm:inline">Thank you for your generous donation!</span>
            </div>
          )}
          <div className="text-center">
            <button type="submit" className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-8 rounded-full shadow-lg border-b-4 border-pink-800 transition-all duration-300 transform hover:scale-105">
              Donate Now
            </button>
          </div>
          <p className="text-center text-xs text-gray-400 mt-4">
            Your donation will be processed securely through our fiscal sponsor, Hack Club.
          </p>
        </form>
      </div>
    </div>
  );
};

// Dashboard Sub-Components
const DashboardOverview = ({ volunteers, tasks, events }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    <DashboardCard title="Total Volunteers" icon={<Users size={24} />}>
      <div className="text-4xl font-bold text-gray-800">{volunteers.length}</div>
    </DashboardCard>
    <DashboardCard title="Open Tasks" icon={<Clock size={24} />}>
      <div className="text-4xl font-bold text-gray-800">{tasks.filter(t => t.status !== 'Completed').length}</div>
    </DashboardCard>
    <DashboardCard title="Upcoming Events" icon={<CalendarDays size={24} />}>
      <div className="text-4xl font-bold text-gray-800">{events.length}</div>
    </DashboardCard>
  </div>
);

const VolunteerManagement = ({ volunteers }) => (
  <div>
    <h3 className="text-2xl font-bold mb-6">Volunteer Management</h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {volunteers.map(v => (
        <div key={v.id} className="bg-gray-100 p-4 rounded-xl border border-gray-200 shadow-sm flex items-center space-x-4">
          <Users size={24} className="text-pink-600" />
          <div className="flex-grow">
            <div className="font-semibold">{v.name}</div>
            <div className="text-sm text-gray-600">{v.role}</div>
          </div>
          <span className={`px-2 py-0.5 text-xs font-semibold rounded-full ${v.status === 'Active' ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'}`}>
            {v.status}
          </span>
        </div>
      ))}
    </div>
  </div>
);

const TaskBoard = ({ tasks }) => (
  <div>
    <h3 className="text-2xl font-bold mb-6">Task Board</h3>
    <div className="space-y-4">
      {tasks.map(t => (
        <div key={t.id} className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex items-start space-x-4">
          {t.status === 'Completed' ? <CheckCircle size={24} className="text-green-600 mt-1" /> : <Clock size={24} className="text-yellow-600 mt-1" />}
          <div className="flex-grow">
            <div className="font-semibold text-gray-800">{t.title}</div>
            <div className="text-sm text-gray-600">Assigned to: {t.assignee}</div>
          </div>
          <span className={`px-3 py-1 text-xs font-semibold rounded-full ${t.status === 'Completed' ? 'bg-green-200 text-green-800' : 'bg-yellow-200 text-yellow-800'}`}>
            {t.status}
          </span>
        </div>
      ))}
    </div>
  </div>
);

const EventCalendar = ({ events }) => (
  <div>
    <h3 className="text-2xl font-bold mb-6">Event Calendar</h3>
    <div className="space-y-4">
      {events.map(e => (
        <div key={e.id} className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex items-center space-x-4">
          <CalendarDays size={24} className="text-purple-600" />
          <div>
            <div className="font-semibold text-gray-800">{e.title}</div>
            <div className="text-sm text-gray-600">{e.date} at {e.location}</div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const FileRepository = () => {
  const files = [
    { id: 1, name: 'Awareness Campaign Guide.pdf', type: 'PDF', size: '2.4 MB' },
    { id: 2, name: 'Social Media Assets.zip', type: 'ZIP', size: '15.1 MB' },
    { id: 3, name: 'Volunteer Orientation Video.mp4', type: 'MP4', size: '56.7 MB' },
  ];
  return (
    <div>
      <h3 className="text-2xl font-bold mb-6">File Repository</h3>
      <div className="space-y-4">
        {files.map(file => (
          <div key={file.id} className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex items-center space-x-4">
            <Folder size={24} className="text-gray-500" />
            <div className="flex-grow">
              <div className="font-semibold text-gray-800">{file.name}</div>
              <div className="text-sm text-gray-600">{file.size} - {file.type}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Chat UI
const ChatMessage = ({ sender, text, time }) => (
  <div className={`flex ${sender === 'You' ? 'justify-end' : 'justify-start'}`}>
    <div className={`p-4 rounded-3xl max-w-xs ${sender === 'You' ? 'bg-pink-600 text-white' : 'bg-white text-gray-800 border border-gray-200'}`}>
      <div className="font-semibold">{sender}</div>
      <p>{text}</p>
      <div className={`text-right text-xs mt-1 ${sender === 'You' ? 'text-pink-100' : 'text-gray-400'}`}>{time}</div>
    </div>
  </div>
);

const DirectMessaging = ({ selectedUser }) => {
  const mockMessages = {
    'Jane Doe': [
      { id: 1, sender: 'Jane Doe', text: 'Hey, do you have the latest campaign brief?', time: '10:00 AM' },
      { id: 2, sender: 'You', text: 'Not yet, I’m working on it!', time: '10:05 AM' },
    ],
    'John Smith': [
      { id: 3, sender: 'John Smith', text: 'Hi, I need help with social media posts.', time: '11:20 AM' },
      { id: 4, sender: 'You', text: 'Sure, what do you need?', time: '11:25 AM' },
    ],
    'Emily White': [
      { id: 5, sender: 'Emily White', text: 'The fundraising event is next week!', time: '09:00 AM' },
      { id: 6, sender: 'You', text: 'I know! Super excited!', time: '09:05 AM' },
    ],
    'Alex Johnson': [
      { id: 7, sender: 'Alex Johnson', text: 'Did you finalize the volunteer schedule?', time: '02:00 PM' },
      { id: 8, sender: 'You', text: 'Working on it now. Will have it to you by EOD.', time: '02:10 PM' },
    ]
  };

  const [messages, setMessages] = useState(mockMessages[selectedUser.name] || []);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (newMessage.trim()) {
      const newMsg = {
        id: messages.length + 1,
        sender: 'You',
        text: newMessage,
        time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages([...messages, newMsg]);
      setNewMessage('');
    }
  };

  return (
    <div className="flex flex-col h-full bg-gray-100 rounded-2xl shadow-inner p-4">
      <h3 className="text-2xl font-bold mb-4">{selectedUser.name}</h3>
      <div className="flex-grow overflow-y-auto space-y-4 mb-4">
        {messages.map(msg => (
          <ChatMessage key={msg.id} {...msg} />
        ))}
      </div>
      <form onSubmit={handleSendMessage} className="flex space-x-4">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type your message..."
          className="flex-grow px-4 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-pink-500 transition-colors duration-300"
        />
        <button
          type="submit"
          className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-6 rounded-full shadow-lg border-b-4 border-pink-800 transition-all duration-300 transform hover:scale-105"
        >
          <Send size={20} />
        </button>
      </form>
    </div>
  );
};


// Main App component
const App = () => {
  const [currentPage, setCurrentPage] = useState('loginLanding');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [dashboardTab, setDashboardTab] = useState('overview');
  const [selectedChatUser, setSelectedChatUser] = useState(null);

  const [volunteers] = useState([
    { id: 1, name: 'Jane Doe', role: 'Event Coordinator', status: 'Active' },
    { id: 2, name: 'John Smith', role: 'Social Media Manager', status: 'Active' },
    { id: 3, name: 'Emily White', role: 'Fundraiser', status: 'Active' },
    { id: 4, name: 'Alex Johnson', role: 'Community Outreach', status: 'Active' },
  ]);

  const [tasks] = useState([
    { id: 1, title: 'Organize Breast Cancer Awareness Walk', assignee: 'Jane Doe', status: 'In Progress' },
    { id: 2, title: 'Draft monthly newsletter', assignee: 'John Smith', status: 'Completed' },
    { id: 3, title: 'Secure venue for next meeting', assignee: 'Emily White', status: 'Pending' },
  ]);

  const [events] = useState([
    { id: 1, date: 'October 25, 2025', title: 'Annual Awareness Walk', location: 'City Park' },
    { id: 2, date: 'November 10, 2025', title: 'Free Screening Campaign', location: 'Community Clinic' },
    { id: 3, date: 'December 5, 2025', title: 'Survivor Stories Panel', location: 'Online' },
  ]);

  const handleLogin = (username) => {
    setLoggedInUser(username);
    setIsLoggedIn(true);
    setCurrentPage('dashboard');
    setIsMobileMenuOpen(false);
  };

  const handleSignup = (username) => {
    setLoggedInUser(username);
    setIsLoggedIn(true);
    setCurrentPage('dashboard');
    setIsMobileMenuOpen(false);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setLoggedInUser(null);
    setCurrentPage('loginLanding');
  };

  const PageContent = () => {
    switch (currentPage) {
      case 'loginLanding':
        return <LoginLandingPage setCurrentPage={setCurrentPage} />;
      case 'login':
        return <LoginPage onLogin={handleLogin} setCurrentPage={setCurrentPage} />;
      case 'signup':
        return <SignupPage onSignup={handleSignup} setCurrentPage={setCurrentPage} />;
      case 'awareness':
        return <AwarenessHub />;
      case 'volunteer':
        return <VolunteerForm />;
      case 'donate':
        return <DonationForm />;
      case 'dashboard':
        return isLoggedIn ? (
          <Dashboard
            volunteers={volunteers}
            tasks={tasks}
            events={events}
            dashboardTab={dashboardTab}
            setDashboardTab={setDashboardTab}
            selectedChatUser={selectedChatUser}
            setSelectedChatUser={setSelectedChatUser}
          />
        ) : (
          <LoginLandingPage setCurrentPage={setCurrentPage} />
        );
      default:
        return <LoginLandingPage setCurrentPage={setCurrentPage} />;
    }
  };

  const Dashboard = ({ volunteers, tasks, events, dashboardTab, setDashboardTab, selectedChatUser, setSelectedChatUser }) => {
    const renderContent = () => {
      switch (dashboardTab) {
        case 'tasks':
          return <TaskBoard tasks={tasks} />;
        case 'events':
          return <EventCalendar events={events} />;
        case 'volunteers':
          return <VolunteerManagement volunteers={volunteers} />;
        case 'files':
          return <FileRepository />;
        case 'messages':
          return (
            <div className="flex flex-col md:flex-row h-full">
              <div className="w-full md:w-1/3 border-r border-gray-200">
                <h4 className="text-xl font-bold p-4 border-b border-gray-200">Team Members</h4>
                <ul className="p-2 space-y-1">
                  {volunteers.map(user => (
                    <li key={user.id}>
                      <button
                        onClick={() => setSelectedChatUser(user)}
                        className={`w-full text-left px-4 py-3 rounded-xl transition-colors duration-200 ${selectedChatUser && selectedChatUser.id === user.id ? 'bg-pink-100 text-pink-600' : 'hover:bg-gray-100'}`}
                      >
                        {user.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-full md:w-2/3 p-4">
                {selectedChatUser ? (
                  <DirectMessaging selectedUser={selectedChatUser} />
                ) : (
                  <div className="flex items-center justify-center h-full text-gray-500">
                    <p>Select a team member to start a chat.</p>
                  </div>
                )}
              </div>
            </div>
          );
        case 'overview':
        default:
          return <DashboardOverview volunteers={volunteers} tasks={tasks} events={events} />;
      }
    };

    return (
      <div className="flex flex-col md:flex-row min-h-[calc(100vh-8rem)]">
        {/* Sidebar Navigation */}
        <div className="w-full md:w-64 bg-gray-800 text-white p-6 shadow-xl flex-shrink-0">
          <h3 className="text-2xl font-bold mb-8">Dashboard</h3>
          <nav className="flex flex-col space-y-2">
            <SidebarLink icon={<LayoutDashboard size={20} />} text="Overview" isActive={dashboardTab === 'overview'} onClick={() => { setDashboardTab('overview'); setSelectedChatUser(null); }} />
            <SidebarLink icon={<Users size={20} />} text="Volunteers" isActive={dashboardTab === 'volunteers'} onClick={() => { setDashboardTab('volunteers'); setSelectedChatUser(null); }} />
            <SidebarLink icon={<FileText size={20} />} text="Tasks" isActive={dashboardTab === 'tasks'} onClick={() => { setDashboardTab('tasks'); setSelectedChatUser(null); }} />
            <SidebarLink icon={<CalendarDays size={20} />} text="Events" isActive={dashboardTab === 'events'} onClick={() => { setDashboardTab('events'); setSelectedChatUser(null); }} />
            <SidebarLink icon={<Folder size={20} />} text="Files" isActive={dashboardTab === 'files'} onClick={() => { setDashboardTab('files'); setSelectedChatUser(null); }} />
            <SidebarLink icon={<MessageCircle size={20} />} text="Messages" isActive={dashboardTab === 'messages'} onClick={() => setDashboardTab('messages')} />
          </nav>
        </div>
        {/* Main Content Area */}
        <div className="flex-grow p-8 bg-gray-50">
          {renderContent()}
        </div>
      </div>
    );
  };

  const SidebarLink = ({ icon, text, isActive, onClick }) => (
    <button
      onClick={onClick}
      className={`flex items-center space-x-3 px-4 py-3 font-medium rounded-xl transition-colors duration-200 ${
        isActive
          ? 'bg-pink-600 text-white shadow-md'
          : 'text-gray-300 hover:bg-gray-700 hover:text-white'
      }`}
    >
      {icon}
      <span>{text}</span>
    </button>
  );

  return (
    <div className="min-h-screen bg-gray-50 font-sans flex flex-col antialiased">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
        .font-sans {
          font-family: 'Inter', sans-serif;
        }
        .animate-silky-wave {
          background-image: linear-gradient(135deg, #fce4ec, #f8bbd0, #e1bee7, #d1c4e9);
          background-size: 400% 400%;
          animation: silky-wave-animation 15s ease infinite;
        }
        @keyframes silky-wave-animation {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>

      {/* Header and Navigation */}
      <header className="fixed top-0 left-0 w-full bg-white bg-opacity-90 backdrop-blur-md z-50 shadow-sm transition-all duration-300">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Heart className="text-pink-600" size={28} />
            <h1 className="text-2xl font-bold text-gray-800 tracking-tight">Pink Aware Hub</h1>
          </div>
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-6">
            <NavLink onClick={() => setCurrentPage('loginLanding')}>Home</NavLink>
            <NavLink onClick={() => setCurrentPage('awareness')}>Awareness</NavLink>
            <NavLink onClick={() => setCurrentPage('volunteer')}>Volunteer</NavLink>
            <NavLink onClick={() => setCurrentPage('donate')}>Donate</NavLink>
            {!isLoggedIn ? (
              <button
                onClick={() => setCurrentPage('login')}
                className="bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2 px-6 rounded-full shadow-lg border-b-4 border-pink-800 transition-all duration-300 transform hover:scale-105"
              >
                Log In
              </button>
            ) : (
              <button
                onClick={handleLogout}
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-6 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                Log Out
              </button>
            )}
          </nav>
          {/* Mobile Nav Toggle */}
          <div className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
        {/* Mobile Nav */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-white shadow-lg p-4 overflow-hidden"
            >
              <nav className="flex flex-col space-y-2">
                <NavLink onClick={() => { setCurrentPage('loginLanding'); setIsMobileMenuOpen(false); }}>Home</NavLink>
                <NavLink onClick={() => { setCurrentPage('awareness'); setIsMobileMenuOpen(false); }}>Awareness</NavLink>
                <NavLink onClick={() => { setCurrentPage('volunteer'); setIsMobileMenuOpen(false); }}>Volunteer</NavLink>
                <NavLink onClick={() => { setCurrentPage('donate'); setIsMobileMenuOpen(false); }}>Donate</NavLink>
                {!isLoggedIn ? (
                  <button
                    onClick={() => { setCurrentPage('login'); setIsMobileMenuOpen(false); }}
                    className="bg-pink-600 text-white font-semibold py-2 px-4 rounded-full shadow-md mt-2"
                  >
                    Log In
                  </button>
                ) : (
                  <button
                    onClick={handleLogout}
                    className="bg-gray-200 text-gray-800 font-semibold py-2 px-4 rounded-full shadow-md mt-2"
                  >
                    Log Out
                  </button>
                )}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Content Area */}
      <main className="flex-grow pt-20">
        <PageContent />
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">
            © 2025 Pink Aware Hub. All rights reserved. Fiscally sponsored by Hack Club.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
