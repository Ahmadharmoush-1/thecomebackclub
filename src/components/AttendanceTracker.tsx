import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Users, TrendingUp, Clock } from "lucide-react";
import { startOfWeek, isBefore } from "date-fns"; // install date-fns

interface AttendanceTrackerProps {
  sessionName: string;
  currentAttendees: number; // initial value
  maxCapacity: number;
  location: string;
  timeSlot: string;
  sport: "Football" | "Padel";
  onJoinSession?: () => void;
}

const AttendanceTracker = ({ 
  sessionName, 
  currentAttendees, 
  maxCapacity, 
  location, 
  timeSlot, 
  sport,
  onJoinSession 
}: AttendanceTrackerProps) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [attendees, setAttendees] = useState(currentAttendees);

  // Weekly reset (every Monday)
  useEffect(() => {
    const lastReset = localStorage.getItem("attendanceLastReset");
    const now = new Date();
    const weekStart = startOfWeek(now, { weekStartsOn: 1 }); // Monday start

    if (!lastReset || isBefore(new Date(lastReset), weekStart)) {
      setAttendees(0);
      localStorage.setItem("attendanceLastReset", weekStart.toISOString());
    } else {
      const savedAttendees = localStorage.getItem(`${sessionName}-attendees`);
      if (savedAttendees) setAttendees(Number(savedAttendees));
    }
  }, [sessionName]);

  // Save whenever attendees change
  useEffect(() => {
    localStorage.setItem(`${sessionName}-attendees`, attendees.toString());
  }, [attendees, sessionName]);

  const attendancePercentage = (attendees / maxCapacity) * 100;
  const spotsLeft = maxCapacity - attendees;
  
  const getUrgencyLevel = () => {
    if (spotsLeft <= 2) return "high";
    if (spotsLeft <= 5) return "medium";
    return "low";
  };
  
  const getUrgencyColor = () => {
    const level = getUrgencyLevel();
    if (level === "high") return "text-red-600";
    if (level === "medium") return "text-yellow-600";
    return "text-green-600";
  };
  
  const getUrgencyMessage = () => {
    const level = getUrgencyLevel();
    if (level === "high") return spotsLeft === 0 ? "Session Full!" : "Almost Full!";
    if (level === "medium") return "Filling Up Fast";
    return "Available";
  };

  const handleJoinClick = () => {
    if (attendees < maxCapacity) {
      setAttendees(prev => prev + 1);
      onJoinSession?.();
    }
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 300);
  };

  return (
    <Card className="relative overflow-hidden hover:shadow-card transition-all duration-300">
      {/* Urgency indicator */}
      {getUrgencyLevel() === "high" && (
        <div className="absolute top-0 left-0 right-0 bg-red-500 h-1 animate-pulse" />
      )}
      
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg flex items-center gap-2">
            <Badge 
              variant={sport === "Football" ? "default" : "secondary"}
              className={sport === "Football" ? "bg-accent text-accent-foreground" : ""}
            >
              {sport}
            </Badge>
            {sessionName}
          </CardTitle>
          <Badge 
            variant="outline" 
            className={`${getUrgencyColor()} border-current ${
              getUrgencyLevel() === "high" ? "animate-pulse" : ""
            }`}
          >
            {getUrgencyMessage()}
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Clock className="h-4 w-4" />
          {timeSlot}
        </div>
        
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="flex items-center gap-1">
              <Users className="h-4 w-4" />
              Current Attendance
            </span>
            <span className={`font-medium ${getUrgencyColor()}`}>
              {attendees}/{maxCapacity}
            </span>
          </div>
          
          <Progress 
            value={attendancePercentage} 
            className="h-2"
          />
          
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span>{spotsLeft} spots left</span>
            <div className="flex items-center gap-1">
              <TrendingUp className="h-3 w-3" />
              <span>{Math.round(attendancePercentage)}% full</span>
            </div>
          </div>
        </div>
        
        <div className="pt-2">
          <Button 
            variant={spotsLeft === 0 ? "outline" : "default"} 
            className={`w-full transition-all duration-300 ${
              isAnimating ? "scale-95" : "scale-100"
            }`}
            disabled={spotsLeft === 0}
            onClick={handleJoinClick}
          >
            {spotsLeft === 0 ? "Session Full" : "Reserve Your Spot"}
          </Button>
          
          {spotsLeft <= 3 && spotsLeft > 0 && (
            <p className="text-xs text-red-600 text-center mt-2 animate-pulse">
              ⚡ Only {spotsLeft} spots remaining!
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default AttendanceTracker;
