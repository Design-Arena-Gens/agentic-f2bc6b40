'use client';

import { useState } from 'react';
import { BookOpen, Database, FileText, GitBranch, Lock, RefreshCw, BookMarked, ChevronRight } from 'lucide-react';

type Unit = {
  id: number;
  title: string;
  hours: number;
  topics: string[];
  icon: any;
};

const units: Unit[] = [
  {
    id: 1,
    title: "Database Concepts and Architecture",
    hours: 5,
    icon: Database,
    topics: [
      "Database, Database Management System, Database Users, and Benefits of Databases",
      "Data Models, Schemas, and Instances",
      "Three-Schema Architecture and Data Independence",
      "Database Languages and Interfaces",
      "The Database System Environment",
      "Centralized and Client/Server Architectures for DBMSs",
      "Classification of Database Management Systems"
    ]
  },
  {
    id: 2,
    title: "Data Modeling with ER Diagrams",
    hours: 8,
    icon: GitBranch,
    topics: [
      "Entity-Relationship Model",
      "Entities and Attributes",
      "Relationships and Constraints",
      "Enhanced ER Model",
      "ER Diagram Notation",
      "Mapping ER Diagrams to Relational Schema"
    ]
  },
  {
    id: 3,
    title: "Relational Model and SQL",
    hours: 12,
    icon: FileText,
    topics: [
      "Relational Model Concepts",
      "Relational Algebra",
      "SQL Data Definition Language (DDL)",
      "SQL Data Manipulation Language (DML)",
      "Joins and Subqueries",
      "Aggregate Functions and Grouping",
      "Views and Indexes"
    ]
  },
  {
    id: 4,
    title: "Normalization",
    hours: 8,
    icon: BookMarked,
    topics: [
      "Functional Dependencies",
      "Normal Forms (1NF, 2NF, 3NF, BCNF)",
      "Decomposition and Lossless Joins",
      "Dependency Preservation",
      "Denormalization Considerations"
    ]
  },
  {
    id: 5,
    title: "Transaction Processing",
    hours: 8,
    icon: RefreshCw,
    topics: [
      "Transaction Concepts",
      "ACID Properties",
      "Transaction States and Operations",
      "Schedules and Serializability",
      "Testing for Serializability"
    ]
  },
  {
    id: 6,
    title: "Concurrency Control",
    hours: 5,
    icon: Lock,
    topics: [
      "Concurrency Control Techniques",
      "Locking Protocols",
      "Two-Phase Locking (2PL)",
      "Deadlock Handling",
      "Timestamp Ordering",
      "Optimistic Concurrency Control"
    ]
  },
  {
    id: 7,
    title: "Database Recovery",
    hours: 2,
    icon: BookOpen,
    topics: [
      "Recovery Concepts",
      "Log-Based Recovery",
      "Checkpointing",
      "Recovery Algorithms",
      "Backup and Restore Strategies"
    ]
  }
];

export default function Home() {
  const [selectedUnit, setSelectedUnit] = useState<Unit | null>(null);
  const [expandedTopics, setExpandedTopics] = useState<{ [key: number]: boolean }>({});

  const totalHours = units.reduce((sum, unit) => sum + unit.hours, 0);

  const toggleTopic = (unitId: number) => {
    setExpandedTopics(prev => ({
      ...prev,
      [unitId]: !prev[unitId]
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center gap-3">
            <Database className="w-10 h-10 text-indigo-600 dark:text-indigo-400" />
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                Database Management Systems
              </h1>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                Credits: 3 | Total Lecture Hours: {totalHours}
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Course Overview */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Course Overview</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-400 mb-2">Objective</h3>
              <p className="text-gray-700 dark:text-gray-300">
                The main objective of this course is to introduce different concepts of database, data modeling with ER diagram,
                features of SQL, normalization, transaction processing, concurrency control, and database recovery.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-400 mb-2">Description</h3>
              <p className="text-gray-700 dark:text-gray-300">
                The course covers different concepts of database management systems including database system concepts and architecture,
                ER diagram, relational model, SQL, normalization, transaction processing, concurrency control, and database recovery.
              </p>
            </div>
          </div>
        </div>

        {/* Units Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {units.map((unit) => {
            const Icon = unit.icon;
            const isExpanded = expandedTopics[unit.id];

            return (
              <div
                key={unit.id}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
                onClick={() => {
                  setSelectedUnit(unit);
                  toggleTopic(unit.id);
                }}
              >
                <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-4">
                  <div className="flex items-center justify-between text-white">
                    <div className="flex items-center gap-3">
                      <Icon className="w-8 h-8" />
                      <span className="text-lg font-bold">Unit {unit.id}</span>
                    </div>
                    <span className="text-sm bg-white/20 px-3 py-1 rounded-full">
                      {unit.hours} LHs
                    </span>
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                    {unit.title}
                  </h3>

                  <div className={`space-y-2 ${isExpanded ? 'block' : 'hidden'}`}>
                    <h4 className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 mb-2">
                      Topics Covered:
                    </h4>
                    <ul className="space-y-1">
                      {unit.topics.map((topic, idx) => (
                        <li key={idx} className="text-sm text-gray-600 dark:text-gray-300 flex items-start gap-2">
                          <ChevronRight className="w-4 h-4 text-indigo-500 flex-shrink-0 mt-0.5" />
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    className="mt-4 text-indigo-600 dark:text-indigo-400 text-sm font-semibold hover:text-indigo-700 dark:hover:text-indigo-300 flex items-center gap-1"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleTopic(unit.id);
                    }}
                  >
                    {isExpanded ? 'Show Less' : 'Show Topics'}
                    <ChevronRight className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Course Statistics */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Course Statistics</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center p-4 bg-indigo-50 dark:bg-indigo-900/30 rounded-lg">
              <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">7</div>
              <div className="text-sm text-gray-600 dark:text-gray-300 mt-1">Total Units</div>
            </div>
            <div className="text-center p-4 bg-purple-50 dark:bg-purple-900/30 rounded-lg">
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">{totalHours}</div>
              <div className="text-sm text-gray-600 dark:text-gray-300 mt-1">Lecture Hours</div>
            </div>
            <div className="text-center p-4 bg-pink-50 dark:bg-pink-900/30 rounded-lg">
              <div className="text-3xl font-bold text-pink-600 dark:text-pink-400">3</div>
              <div className="text-sm text-gray-600 dark:text-gray-300 mt-1">Credits</div>
            </div>
            <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                {units.reduce((sum, unit) => sum + unit.topics.length, 0)}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300 mt-1">Total Topics</div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-800 shadow-md mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-gray-600 dark:text-gray-300 text-sm">
            Database Management Systems Course Platform | Interactive Learning Experience
          </p>
        </div>
      </footer>
    </div>
  );
}
