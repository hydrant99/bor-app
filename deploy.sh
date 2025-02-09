#!/bin/bash
#This is the deployment script for theboxofrocks.com
#Jay Freeman 1/21/2025
#ChatGPT Assisted development


# Set log file
LOG_FILE="deploy.log"

# Clear the log file
> $LOG_FILE

# Navigate to project directory
echo "Navigating to project directory..." | tee -a $LOG_FILE
cd /home/jay/Documents/VSCP/theboxofrocks/|| { echo "Directory not found" | tee -a $LOG_FILE; exit 1; }

# Step 1: Run npm build
echo "Starting build..." | tee -a $LOG_FILE
if npm run build >> $LOG_FILE 2>&1; then
    echo "Build successful!" | tee -a $LOG_FILE
else
    echo "Build failed!" | tee -a $LOG_FILE
    echo -e "Build failed at $(date)\n\nLog file:\n$(cat $LOG_FILE)" | mail -s "React Build Failed" hydrant1@gmail.com
    exit 1
fi

# Step 2: Commit and push changes to GitHub
echo "Committing changes to GitHub..." | tee -a $LOG_FILE
timestamp=$(date "+%Y-%m-%d %H:%M:%S")
git add . >> $LOG_FILE 2>&1
git commit -m "Build completed at $timestamp" >> $LOG_FILE 2>&1
if git push >> $LOG_FILE 2>&1; then
    echo "Changes pushed to GitHub!" | tee -a $LOG_FILE
else
    echo "Git push failed!" | tee -a $LOG_FILE
    echo -e "Git push failed at $timestamp\n\nLog file:\n$(cat $LOG_FILE)" | mail -s "React Git Push Failed" hydrant1@gmail.com
    exit 1
fi

# Step 3: Send success email
echo "Sending success email..." | tee -a $LOG_FILE
echo -e "Build and deployment successful at $timestamp\n\nLog file:\n$(cat $LOG_FILE)" | mail -s "Box of Rocks React Deployment Successful" hydrant1@gmail.com

echo "Deployment script completed successfully!" | tee -a $LOG_FILE
