module.exports = [
  {
    "constant": true,
    "inputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "tasksBundle2",
    "outputs": [
      {
        "name": "reviewAgent1",
        "type": "address"
      },
      {
        "name": "reviewAgent2",
        "type": "address"
      },
      {
        "name": "reviewAgent3",
        "type": "address"
      },
      {
        "name": "reviewResult1",
        "type": "bool"
      },
      {
        "name": "reviewResult2",
        "type": "bool"
      },
      {
        "name": "reviewResult3",
        "type": "bool"
      },
      {
        "name": "expectedPrice",
        "type": "uint256"
      },
      {
        "name": "price",
        "type": "uint256"
      },
      {
        "name": "tokensAmount",
        "type": "uint256"
      },
      {
        "name": "withdrawn",
        "type": "bool"
      },
      {
        "name": "tokensWithdrawn",
        "type": "bool"
      },
      {
        "name": "expectedCompleteTime",
        "type": "uint256"
      },
      {
        "name": "completeTime",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "skills",
    "outputs": [
      {
        "name": "name",
        "type": "string"
      },
      {
        "name": "skill",
        "type": "uint8"
      },
      {
        "name": "agentsCount",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "applicationsCount",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "tasksBundle1",
    "outputs": [
      {
        "name": "applicationID",
        "type": "uint256"
      },
      {
        "name": "agent",
        "type": "address"
      },
      {
        "name": "buyer",
        "type": "address"
      },
      {
        "name": "skillID",
        "type": "uint256"
      },
      {
        "name": "skillLevel",
        "type": "uint256"
      },
      {
        "name": "skillLevelMultiplier",
        "type": "uint256"
      },
      {
        "name": "request",
        "type": "bytes32"
      },
      {
        "name": "response",
        "type": "bytes32"
      },
      {
        "name": "description",
        "type": "string"
      },
      {
        "name": "status",
        "type": "uint8"
      },
      {
        "name": "rejectedAgentsCount",
        "type": "uint256"
      },
      {
        "name": "createdTimestamp",
        "type": "uint256"
      },
      {
        "name": "lastUpdateTimestamp",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "skillsCount",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "mentatToken",
    "outputs": [
      {
        "name": "",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "owner",
    "outputs": [
      {
        "name": "",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "tasksCount",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "applications",
    "outputs": [
      {
        "name": "name",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "",
        "type": "address"
      }
    ],
    "name": "agents",
    "outputs": [
      {
        "name": "name",
        "type": "string"
      },
      {
        "name": "email",
        "type": "string"
      },
      {
        "name": "isBusy",
        "type": "bool"
      },
      {
        "name": "agentSkillsCount",
        "type": "uint256"
      },
      {
        "name": "registrationTimestamp",
        "type": "uint256"
      },
      {
        "name": "lastActionTimestamp",
        "type": "uint256"
      },
      {
        "name": "tasksCompleted",
        "type": "uint256"
      },
      {
        "name": "tasksRejected",
        "type": "uint256"
      },
      {
        "name": "agentsReviews",
        "type": "uint256"
      },
      {
        "name": "currentTaskId",
        "type": "uint256"
      },
      {
        "name": "currentTaskType",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "name": "message",
        "type": "string"
      }
    ],
    "name": "SUCCESS",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "name": "message",
        "type": "string"
      }
    ],
    "name": "FAIL",
    "type": "event"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "newMentatToken",
        "type": "address"
      }
    ],
    "name": "setMentatToken",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [],
    "name": "agentSignIn",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [],
    "name": "agentSignOut",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_name",
        "type": "string"
      },
      {
        "name": "_email",
        "type": "string"
      }
    ],
    "name": "agentSignUp",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "agent",
        "type": "address"
      }
    ],
    "name": "isAgentRegistered",
    "outputs": [
      {
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "agent",
        "type": "address"
      }
    ],
    "name": "isAgentOnline",
    "outputs": [
      {
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_name",
        "type": "string"
      },
      {
        "name": "_email",
        "type": "string"
      }
    ],
    "name": "agentUpdateAccount",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "agentGetCurrentTaskType",
    "outputs": [
      {
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "agentGetCurrentTask",
    "outputs": [
      {
        "name": "taskId",
        "type": "uint256"
      },
      {
        "name": "taskType",
        "type": "bool"
      },
      {
        "name": "applicationName",
        "type": "string"
      },
      {
        "name": "description",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "taskId",
        "type": "uint256"
      },
      {
        "name": "agent",
        "type": "address"
      },
      {
        "name": "tokensAmount",
        "type": "uint256"
      }
    ],
    "name": "acceptTask",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }
];
