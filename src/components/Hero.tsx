import React, { useEffect, useRef, useState } from 'react';
import { Github, Linkedin, Mail, Award, Code2, Server } from 'lucide-react';

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorOutlineRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      
      if (cursorDotRef.current) {
        cursorDotRef.current.style.left = `${clientX}px`;
        cursorDotRef.current.style.top = `${clientY}px`;
      }
      
      if (cursorOutlineRef.current) {
        // Add smooth animation to cursor outline
        cursorOutlineRef.current.animate({
          left: `${clientX}px`,
          top: `${clientY}px`
        }, {
          duration: 500,
          fill: "forwards"
        });
      }
    };

    const handleMouseOver = () => setIsHovering(true);
    const handleMouseOut = () => setIsHovering(false);

    // Add listeners for interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .card-hover');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseover', handleMouseOver);
      el.addEventListener('mouseout', handleMouseOut);
    });

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseover', handleMouseOver);
        el.removeEventListener('mouseout', handleMouseOut);
      });
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const characters = '01アイウエオカキクケコサシスセソタチツテト';
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    const drops: number[] = Array(columns).fill(1);

    let frameCount = 0;
    const maxFrameCount = 3; // Control animation speed

    function draw() {
      frameCount = (frameCount + 1) % maxFrameCount;
      if (frameCount !== 0) return;

      ctx.fillStyle = 'rgba(30, 30, 30, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#569CD6';
      ctx.font = `${fontSize}px JetBrains Mono`;

      for (let i = 0; i < drops.length; i++) {
        const text = characters[Math.floor(Math.random() * characters.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    }

    let animationFrameId: number;
    const animate = () => {
      draw();
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Intersection Observer for fade-in animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.section-transition');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div ref={cursorDotRef} className="cursor-dot" />
      <div 
        ref={cursorOutlineRef} 
        className={`cursor-outline ${isHovering ? 'cursor-hover' : ''}`} 
      />
      <canvas ref={canvasRef} className="matrix-background" />
      <div className="background-grid" />
      
      <div className="container mx-auto px-4 z-10">
        <div className="text-center max-w-4xl mx-auto section-transition">
          <div className="mb-8 relative">
            <img
              src="https://github.com/Pasachiya.png"
              alt="Sachindu Dilshan"
              className="w-40 h-40 rounded-full mx-auto border-4 border-[var(--variable)] p-1 hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 rounded-full glitch-effect opacity-50" />
          </div>

          <div className="code-line" data-line="01">
            <h1 className="text-5xl font-bold mb-4 glitch-effect" data-text="Sachindu Dilshan">
              <span className="keyword">const</span> <span className="variable">developer</span> = <span className="string">"Sachindu Dilshan"</span>;
            </h1>
          </div>

          <div className="code-line" data-line="02">
            <p className="text-xl mb-8">
              <span className="comment">// DevOps & Full-Stack Developer</span>
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="card-hover bg-[var(--editor-line)] rounded-xl p-6 backdrop-blur-sm">
              <Code2 className="w-8 h-8 text-[var(--function)] mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2 text-[var(--keyword)]">Full Stack Development</h3>
              <p className="text-[var(--comment)] text-sm">Python, Java, JavaScript, C#, React, Node.js, Flask</p>
            </div>
            <div className="card-hover bg-[var(--editor-line)] rounded-xl p-6 backdrop-blur-sm">
              <Server className="w-8 h-8 text-[var(--function)] mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2 text-[var(--keyword)]">DevOps & Cloud</h3>
              <p className="text-[var(--comment)] text-sm">Docker, Kubernetes, Jenkins, Azure, Git, CI/CD</p>
            </div>
            <div className="card-hover bg-[var(--editor-line)] rounded-xl p-6 backdrop-blur-sm">
              <Award className="w-8 h-8 text-[var(--function)] mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2 text-[var(--keyword)]">Certifications</h3>
              <div className="space-y-2">
                <p className="text-[var(--comment)] text-sm">Google Cybersecurity Certificate</p>
                <p className="text-[var(--comment)] text-sm">Microsoft Azure (AZ-900)</p>
              </div>
            </div>
          </div>

          <div className="card-hover bg-[var(--editor-line)]/30 rounded-xl p-6 backdrop-blur-sm mb-8 max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold text-[var(--function)] mb-4">Cybersecurity Expertise</h3>
            <ul className="text-sm text-[var(--variable)] grid md:grid-cols-2 gap-3">
              <li className="flex items-center gap-2 hover:translate-x-2 transition-transform">
                <span className="w-2 h-2 bg-[var(--keyword)] rounded-full"></span>
                Python for Security
              </li>
              <li className="flex items-center gap-2 hover:translate-x-2 transition-transform">
                <span className="w-2 h-2 bg-[var(--keyword)] rounded-full"></span>
                Linux Systems
              </li>
              <li className="flex items-center gap-2 hover:translate-x-2 transition-transform">
                <span className="w-2 h-2 bg-[var(--keyword)] rounded-full"></span>
                SQL Security
              </li>
              <li className="flex items-center gap-2 hover:translate-x-2 transition-transform">
                <span className="w-2 h-2 bg-[var(--keyword)] rounded-full"></span>
                SIEM Tools
              </li>
              <li className="flex items-center gap-2 hover:translate-x-2 transition-transform">
                <span className="w-2 h-2 bg-[var(--keyword)] rounded-full"></span>
                IDS Systems
              </li>
              <li className="flex items-center gap-2 hover:translate-x-2 transition-transform">
                <span className="w-2 h-2 bg-[var(--keyword)] rounded-full"></span>
                Risk Assessment
              </li>
            </ul>
          </div>

          <div className="flex justify-center gap-4">
            <a 
              href="https://github.com/Pasachiya" 
              className="social-link text-[var(--variable)] hover:text-[var(--function)] transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="https://www.linkedin.com/in/sachindu-dilshan" 
              className="social-link text-[var(--variable)] hover:text-[var(--function)] transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="mailto:pasachiya@gmail.com" 
              className="social-link text-[var(--variable)] hover:text-[var(--function)] transition-colors"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}